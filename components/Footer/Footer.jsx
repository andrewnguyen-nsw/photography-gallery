"use client";

import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram, IconBrandMessenger } from '@tabler/icons-react';
import classes from './Footer.module.css';
import Image from "next/image";
import AndrewNguyenLogo from "@public/assets/images/logo.png";

const links = [
  { link: 'https://online.fliphtml5.com/rdvyb/hpsl/?fbclid=IwAR04ELRzDhps_PEGdTvjIp3Z36foGSNCOUSN44izHLRDUZ7GX2IpzSnxqig', label: 'Porfolio' },
  { link: 'https://bento.me/andrewnguyen', label: 'Link in Bio' },
];

export default function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      size="sm"
      target='_blank'
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
          <Image
            src={AndrewNguyenLogo}
            alt="Andrew Nguyen Logo"
            height={30}
            quality={100}
            className="object-contain"
          />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <Anchor href="https://www.facebook.com/ekeminhmu/" target='_blank'>
              <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </Anchor>
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <Anchor href="https://www.m.me/ekeminhmu/" target='_blank'>
              <IconBrandMessenger style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </Anchor>
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <Anchor href="https://www.instagram.com/eke.minh/" target='_blank'>
              <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </Anchor>
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <Anchor href="https://www.linkedin.com/in/andrewnguyen-nsw/" target='_blank'>
              <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </Anchor>
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}