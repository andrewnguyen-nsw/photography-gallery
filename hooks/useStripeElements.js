import { useStripe, useElements } from "@stripe/react-stripe-js";

const useStripeElements = (setMessage, setIsLoading) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (values) => {
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
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
    // your `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };

  return { stripe, elements, handleSubmit }
}

export default useStripeElements;