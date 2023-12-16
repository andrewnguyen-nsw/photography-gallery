import { TextInput, Tooltip, Button, Space, Loader, rem } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useMediaQuery } from "@mantine/hooks";
import { useSession } from 'next-auth/react';
import { IconExclamationCircle, IconCash } from '@tabler/icons-react';
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

const PaymentForm = ({stripe, elements, handleSubmit, message, isLoading}) => {
  const { data: session } = useSession();

  const form = useForm({
    initialValues: {
      email: session?.user.email,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });


  const isSmallScreen = useMediaQuery("(max-width: 48em)");

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <div className="md:mx-8 md:mt-7">
      <form id="payment-form" onSubmit={form.onSubmit(handleSubmit)} className="mt-4">
        <h2 className="text-xl font-bold">Payment method</h2>
        <TextInput
          disabled
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
        <Button variant="filled" fullWidth={isSmallScreen} disabled={isLoading || !stripe || !elements} rightSection={<IconCash size={14} /> } type="submit" className="mt-5">
          {isLoading ? <><Space w="md" /><Loader size="xs"/><Space w="md" /></> : "Pay now"}
        </Button>
      </form>
    </div>
  )
}

export default PaymentForm