"use client";

import { useState, useEffect } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useSession } from 'next-auth/react';
import { Grid, Flex, Group, Divider, Input, TextInput, Button, Loader, Tooltip, Space, Notification, rem } from "@mantine/core";
import { useForm } from '@mantine/form';
import { IconExclamationCircle, IconAlertTriangleFilled, IconCash } from '@tabler/icons-react';
import Success from "@components/PaymentStatus/Success";
import Processing from "@components/PaymentStatus/Processing";
import Error from "@components/PaymentStatus/Error";
import OrderDetail from '@components/OrderDetail/OrderDetail';
import PaymentForm from '@components/PaymentForm/PaymentForm';
import useStripeElements from "@hooks/useStripeElements";
import insertIntoOrderModel from "@utils/payment";

export default function CheckoutForm() {
  const { data: session } = useSession();
  
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { stripe, elements, handleSubmit } = useStripeElements(setMessage, setIsLoading);
  
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("succeeded");
          insertIntoOrderModel(session, productId);
          break;
        case "processing":
          setMessage("processing");
          break;
        case "requires_payment_method":
          setMessage("requires_payment_method");
          break;
        default:
          setMessage("error");
          break;
      }
    });
  }, [stripe]);

  if (message === "succeeded") return <Success />;
  if (message === "processing") return <Processing />;
  if (message === "requires_payment_method" || message === "error") return <Error />;

  return (
    <Grid gutter="xl">
      <Grid.Col span={{ base: 12, sm: 6 }} order={{ base: 2, sm: 1 }}>
        <PaymentForm stripe={stripe} elements={elements} handleSubmit={handleSubmit} message={message} isLoading={isLoading} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6 }} order={{ base: 1, sm: 2 }} className="items-start">
        <OrderDetail />
      </Grid.Col>
    </Grid>
  );
}