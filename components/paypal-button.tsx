"use client"

import React from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

interface PayPalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
  onError?: (error: any) => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onSuccess, onError }) => {
  const [{ isPending }] = usePayPalScriptReducer();

  return (
    <div>
      {isPending ? <div>Loading PayPal...</div> : null}
      <PayPalButtons
        style={{ layout: 'vertical' }}
        fundingSource="paypal"
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                amount: {
                  currency_code: 'EUR',
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          if (actions.order) {
            const details = await actions.order.capture();
            // Optionally verify payment on backend
            try {
              const res = await fetch('/api/paypal/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderID: data.orderID }),
              });
              const result = await res.json();
              if (result.verified) {
                onSuccess(details);
              } else {
                onError && onError('Payment could not be verified.');
              }
            } catch (err) {
              onError && onError(err);
            }
          }
        }}
        onError={onError}
      />
    </div>
  );
};

export default PayPalButton;
