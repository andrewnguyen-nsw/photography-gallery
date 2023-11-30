"use client";

import PhotoshootPackageCard from "@components/PhotoshootPackageCard/PhotoshootPackageCard";
import { Grid, Flex, List, ThemeIcon, rem } from '@mantine/core';
import { IconCamera, IconCameraPlus, IconCameraStar, IconCheck } from '@tabler/icons-react';
import Image from 'next/image';
import Carousel from "@components/Carousel/Carousel";
import Testimonials from "@components/Testimonials/Testimonials";
import leftQuoteIcon from "/public/assets/icons/left-quote.png";

const Photoshoot = () => {
  const iconCamera = <IconCamera style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
  const iconCameraPlus = <IconCameraPlus style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
  const iconCameraStar = <IconCameraStar style={{ width: rem(22), height: rem(22) }} stroke={1.5} />

  const starterList = (
    <div className="mt-4 mb-6 text-base">
      <List 
        spacing="xs"
        center
        icon={
          <ThemeIcon color="gray.6" size={24} radius="xl">
            <IconCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        <List.Item>Trả toàn bộ ảnh gốc chưa qua chỉnh sửa</List.Item>
        <List.Item>$120/h</List.Item>
      </List>
    </div>
  )

  const basicList = (
    <div className="mt-4 mb-6 text-base">
      <List 
        spacing="xs"
        center
        icon={
          <ThemeIcon color="gray.6" size={24} radius="xl">
            <IconCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        <List.Item>Trả toàn bộ ảnh gốc chưa qua chỉnh sửa</List.Item>
        <List.Item>Trả 10 ảnh đã chỉnh sửa sương sương (blend màu)</List.Item>
        <List.Item>$175/h</List.Item>
      </List>
    </div>
  )

  const premiumList = (
    <div className="mt-4 mb-6 text-base">
      <List 
        spacing="xs"
        center
        icon={
          <ThemeIcon color="gray.6" size={24} radius="xl">
            <IconCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        <List.Item>Trả toàn bộ ảnh gốc chưa qua chỉnh sửa</List.Item>
        <List.Item>Trả 15-20 ảnh đã chỉnh sửa kĩ càng (blend màu, tinh chỉnh ánh sáng, làm mịn da, gọn mặt...)</List.Item>
        <List.Item>$200/h</List.Item>
      </List>
    </div>
  )

  return (
    <div className="homepage-container">
      <Carousel/>

      <h2 className="h2_text text-center my-10">Want stunning photos? Book now!</h2>

      <Grid className="mb-20">
        <Grid.Col span={{base:12, md:6, lg:4}}>
          <PhotoshootPackageCard icon={iconCamera} title="Starter package" desc={starterList} />
        </Grid.Col>
        <Grid.Col span={{base:12, md:6, lg:4}}>
          <PhotoshootPackageCard icon={iconCameraPlus} title="Basic package" desc={basicList} />
        </Grid.Col>
        <Grid.Col span={{base:12, md:6, lg:4}}>
          <PhotoshootPackageCard icon={iconCameraStar} title="Premium package" desc={premiumList} />
        </Grid.Col>
      </Grid>

      <h2 lang="vi" className="h2_text text-center">Khách hàng nói gì nhở</h2>
      <h2 className="h2_serif text-center ">Happy Clients</h2>

      <Grid>
        <Grid.Col span={{base:3, md:2}} order={{ base: 2, md: 1 }} className="mb-10">
          <Image src={leftQuoteIcon} width={140} className="opacity-10 pt-6 sm:pt-8 lg:pt-10" alt="left-quote"/>
        </Grid.Col>
        <Grid.Col span={{base:12, md:8}} order={{ base: 1, md: 2 }} className="mb-10">
          <Testimonials />
        </Grid.Col>
        <Grid.Col span={{base:3, md:2}} order={{ base: 3, md: 3 }} className="mb-10 flex justify-end items-end">
          <Image src={leftQuoteIcon} width={140} className="opacity-10 rotate-180 pb-6 sm:pb-8 lg:pb-10" alt="left-quote"/>
        </Grid.Col>
      </Grid>

    </div>
  )
}

export default Photoshoot;