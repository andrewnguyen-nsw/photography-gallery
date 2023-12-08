'use client';

import { useEffect } from 'react';
import { Text, Center, Button, Divider } from '@mantine/core';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { IconExclamationCircle } from '@tabler/icons-react';

const Success = () => {
  return (
    <Center className='h-[70vh]'>
      <div id='card-error' className='flex flex-col bg-red-100 items-center rounded-sm w-full md:w-1/2 xl:w-1/3 p-8 shadow-md'>
        <IconExclamationCircle size={48}/>
        <h2 className='mt-1 text-xl font-bold'>Something went wrong! Please try again.</h2>
      </div>
    </Center>
  )
}

export default Success