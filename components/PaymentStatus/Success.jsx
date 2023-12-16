'use client';

import { useEffect } from 'react';
import { Text, Center, Button, Divider } from '@mantine/core';
import Link from 'next/link'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { IconCircleCheck, IconDownload } from '@tabler/icons-react';
import partyPopper from '/public/assets/icons/party-popper.svg';

const link1 = 'https://storage.googleapis.com/andrew-gallery-photos/%5BCrella%5D%20All%20in%20one%20-%20101%20Presets.zip'
const link2 = 'https://drive.usercontent.google.com/download?id=1bVmM5ZypYS4vis1rOA6di8ydyKv8TBLV&export=download&authuser=1&confirm=t&uuid=30098307-003c-49f5-bdef-602e74d722f2&at=APZUnTVa7cKRjHtaJ86Vuk1beiOv:1701919850995';

const Success = () => {
  const router = useRouter();
  const { data: session } = useSession();
  
  useEffect(() => {
    router.push(link1);
  }, [router])
  

  return (
    <Center className='h-[70vh]'>
      <div id='card-success' className='flex flex-col bg-teal-50 items-center rounded-md w-full md:w-1/2 xl:w-1/3 p-8 shadow-lg'>
        {/* <IconCircleCheck size={48}/> */}
        <Image src={partyPopper} alt="party-popper"/>
        <p className='mt-6 md:mt-8'>Hey {session?.user.name},</p>
        <h2 className='mt-1 text-xl font-bold'>Your Order is Confirmed!</h2>
        <p className='mt-2 text-center'>Your download will begin shortly. If it doesn&apos;t start automatically, please click the button.</p>
        <Button variant='light' component={Link} href={link1} fullWidth className='my-4' leftSection={<IconDownload size={18}/>}>Download Presets</Button>
        <p className='text-sm'>A detailed order receipt is on its way to your email.</p>
        <Divider my="sm" styles={{width: "100%"}}/>
        <p className='text-sm text-gray-500'>Having trouble with the download? No worries, simply use <Link href={link2} className='underline'> this alternative link</Link>.</p>
      </div>
    </Center>
  )
}

export default Success