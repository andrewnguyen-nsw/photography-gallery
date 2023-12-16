import { Divider, Flex, Group } from "@mantine/core";
import Image from 'next/image';
import PresetThumbnail from "/public/assets/images/101PresetsThumbnail.jpg";

const OrderDetail = () => {
  return (
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
  )
}

export default OrderDetail