'use client';

import { useEffect } from 'react';
import { Text, Center, Button, Divider } from '@mantine/core';
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IconCircleCheck, IconDownload } from '@tabler/icons-react';
import partyPopper from '/public/assets/icons/party-popper.svg';

const link1 = 'https://drive.usercontent.google.com/download?id=1bVmM5ZypYS4vis1rOA6di8ydyKv8TBLV&export=download&authuser=1&confirm=t&uuid=30098307-003c-49f5-bdef-602e74d722f2&at=APZUnTVa7cKRjHtaJ86Vuk1beiOv:1701919850995';
const link2 = 'https://uc2894a694534046f9f8e73fdd4f.dl.dropboxusercontent.com/cd/0/get/CI-7xjmctmt9F6dDjjXgp0ZhJvuwTylCZifX5ej4nzyisU6a0hyojYxfpMkwSfWC11zP0xA1_oraKFGmmmQqBsK4wx3_K-o3svCMTAsmgGtztrPUCFwBdb1dV_Zkuc8a4ZPAWrz8U2hEElS63P7wJ9CdcEAri0UtHZd5zATnhksRYO4KjnKLhuJA2WKKYbDWMng/file#'

const Success = () => {
  const router = useRouter()
  
  useEffect(() => {
    router.push(link1);
  }, [router])
  

  return (
    <Center className='h-[70vh]'>
      <div id='card-success' className='flex flex-col bg-teal-50 items-center rounded-md w-full md:w-1/2 xl:w-1/3 p-8 shadow-lg'>
        {/* <IconCircleCheck size={48}/> */}
        <Image src={partyPopper} alt="party-popper"/>
        <p className='mt-6 md:mt-8'>Hey [username],</p>
        <h2 className='mt-1 text-xl font-bold'>Your Order is Confirmed!</h2>
        <p className='mt-2 text-center'>Your download will begin shortly. If it doesn't start automatically, please click the button.</p>
        <Button variant='light' component={Link} href={link1} fullWidth className='my-4' leftSection={<IconDownload size={18}/>}>Download Presets</Button>
        <p className='text-sm'>A detailed order receipt is on its way to your email.</p>
        <Divider my="md"/>
        <p className='text-sm text-gray-500'>Having trouble with the download? No worries, simply use <Link href={link2} className='underline'> this alternative link</Link>.</p>
      </div>
    </Center>
  )
}

export default Success