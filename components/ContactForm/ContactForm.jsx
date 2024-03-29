'use client';

import { useState } from 'react';
import {
  TextInput,
  Textarea,
  Button,
  Group,
  Divider,
  Space,
  Loader
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link'
import classes from './ContactForm.module.css';
import { IconBrandMessenger } from '@tabler/icons-react'
import { sendEmail } from './../../utils/sendEmail';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validate: {
      email: (value) => (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) ? null : 'Invalid email'),
    },
    validateInputOnBlur: true,
  });

  const handleSubmit = async (values) => {
    console.log(values);
    setIsLoading(true);
    const response = await sendEmail(values);
    console.log(response);
    if (response) {
      form.reset();
      setIsLoading(false);
      setIsEmailSent(true);
    }
  }

  return (
    <section className={classes.wrapper}>
      <div className="my-6 md:my-8 sm:w-5/6 md:w-8/12 lg:w-5/12 sm:px-8 md:px-12 bg-white backdrop-filter sm:backdrop-blur-sm bg-opacity-70 border border-gray-300 rounded-md">
        <h2 className='h2_text text-center mt-6 mb-4 md:mt-8 md:mb-6'>Book Now</h2>
        <div className={classes.form}>
          <Button component={Link} href="https://www.m.me/ekeminhmu/" target='_blank' fullWidth color="#006AFF" leftSection={<IconBrandMessenger size={18} />}>Talk to me on Facebook Messenger</Button>
          <Divider my="md" label="OR" labelPosition="center" />
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Email"
              required
              placeholder="Your email"
              {...form.getInputProps('email')}
            />
            <TextInput
              label="Name"
              mt="md"
              placeholder="Your name"
              {...form.getInputProps('name')}
            />
            <Textarea
              required
              label="Your message"
              placeholder="When will you be in Sydney? How many people are in your group? What are your interests?"
              autosize
              minRows={3}
              mt="md"
              {...form.getInputProps('message')}
            />


            <Group justify={isEmailSent ? 'space-between' : 'flex-end'} mt="md">
              {isEmailSent && <p className='italic text-sm'>Email sent successfully!</p>}
              <Button type="submit" disabled={isLoading}>
              {isLoading ? <><Space w="xl" /><Loader size="xs"/><Space w="xl" /></> : "Send message"}
              </Button>
            </Group>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;