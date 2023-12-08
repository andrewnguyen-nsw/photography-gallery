
"use client";

import { useState, useEffect } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import Image from 'next/image';
import { Grid, Flex, Group, Divider, Input, TextInput, Button, Loader, Tooltip, Notification, rem } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconExclamationCircle, IconAlertTriangleFilled, IconCreditCardPay } from '@tabler/icons-react';
import PresetThumbnail from "/public/assets/images/101PresetsThumbnail.jpg";
import Success from "@components/PaymentStatus/Success";
import Processing from "@components/PaymentStatus/Processing";
import Error from "@components/PaymentStatus/Error";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 48em)");

  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

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

  const handleSubmit = async (values) => {
    console.log(values);
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const baseUrl = window.location.origin;
    const returnPath = "/preset/checkout";
    const returnUrl = `${baseUrl}${returnPath}`;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: returnUrl,
        receipt_email: values.email,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <Grid gutter="xl">
    <Grid.Col span={{ base: 12, sm: 6 }} order={{ base: 2, sm: 1 }}>
      <div className="md:mx-8 md:mt-7">
        <form id="payment-form" onSubmit={form.onSubmit(handleSubmit)} className="mt-4">
          <h2 className="text-xl font-bold">Payment method</h2>
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            className="mt-4 mb-2"
            radius={5}
            styles={{
              label: {fontWeight: 400},
            }}
            rightSection={
              <Tooltip label="The receipt will be sent to your email.">
                <IconExclamationCircle
                  style={{ width: rem(20), height: rem(20) }}
                  color="var(--mantine-color-gray-6)"
                />
              </Tooltip>
            }
            {...form.getInputProps('email')}
          />
          <PaymentElement id="payment-element" options={paymentElementOptions} />
          {message && (
            <div className="flex items-center mt-4 space-x-2 text-red-700">
              <p className="">{message}</p>
            </div>
          )}
          {/* <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
              {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
            </span>
          </button> */}
          <Button variant="filled" fullWidth={isSmallScreen} disabled={isLoading || !stripe || !elements} rightSection={<IconCreditCardPay size={14} /> }type="submit" className="mt-5">
            {isLoading ? <Loader size="xs"/> : "Pay now"}
          </Button>
          {/* Show any error or success messages */}
          {/* {message && notifications.show({
            title: "Error",
            message: message,
          })} */}
        </form>
      </div>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6 }} order={{ base: 1, sm: 2 }} className="items-start">
        <div className="bg-gray-50 p-6 md:p-8 md:mx-8 rounded-sm">
          <h2 className="text-xl font-bold mb-2">Order detail</h2>
          <Divider my="sm" />
          <Flex className="flex-between my-4">
            <Flex className="items-center">
              <Image src={PresetThumbnail} alt="Preset Thumbnail" width={50} className="rounded-sm"/>
              <p className="text-base px-4">101 All in One Lightroom Presets</p>
            </Flex>
            <p className="text-lg font-semibold">$1.00</p>
          </Flex>
          <Divider my="sm" />
          <Flex className="flex-between mt-4">
            <p className="font-medium">Total</p>
            <Group>
              <span className="text-sm">USD</span>
              <p>$1.00</p>
            </Group>
          </Flex>
        </div>
      </Grid.Col>
    </Grid>
  );
}