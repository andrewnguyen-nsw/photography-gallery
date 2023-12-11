"use client";

import { useState, useEffect } from "react";
import { useSession, signIn, getProviders } from 'next-auth/react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "@components/CheckoutForm/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY}`);

const Checkout = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, [])
  
  useEffect(() => {
    if (!session && providers) {
      const google = providers && Object.values(providers)[0].id;
      signIn(google);
    }
  }, [session, providers])

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        // Create PaymentIntent as soon as the page loads
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error('Error: ', error);
      }
    }
    fetchPaymentIntent();
  }, []);


  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#343a40',
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="homepage-container">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default Checkout;