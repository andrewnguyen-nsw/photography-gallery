import { Loader, Center } from '@mantine/core';

const loading = () => {
  return (
    <Center className='h-[70vh]'>
      <Loader />
    </Center>
  )
}

export default loading;