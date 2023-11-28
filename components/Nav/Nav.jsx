"use client";

import {
  Menu,
  Group,
  Stack,
  Button,
  Space,
  Center,
  Burger,
  Drawer,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Nav.module.css";
import AndrewNguyenLogo from "@public/assets/images/logo.png";

const links = [
  { link: "/gallery", label: "Gallery" },
  {
    link: "#1",
    label: "Services",
    links: [
      { link: "/photoshoot", label: "Photoshoot" },
      { link: "/presets", label: "Presets" },
      { link: "/tour-guider", label: "Tour Guider" },
    ],
  },
  { link: "/about", label: "About" },
];

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, [])
  

  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} component={Link} href={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          position="bottom-start"
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a href={link.link} className={classes.link}>
              <div className="flex justify-start">
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  <IconChevronDown size="0.9rem" stroke={1.5} />
                </Center>
              </div>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
          {/* Large screen */}
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Link href="/">
            <Image
              src={AndrewNguyenLogo}
              alt="Andrew Nguyen Logo"
              height={30}
              quality={100}
              className="object-contain"
            />
          </Link>
          <Group gap={5} visibleFrom="sm">
            <Space w="xl" />
            <Space w="xl" />
            <Space w="xl" />

            {(session?.user) ? (
              <>
                <Button
                  variant="subtle"
                  styles={{
                    label: { fontWeight: 400 },
                  }}
                  onClick={signOut}
                >
                  Logout
                </Button>
                <Link href="/profile">
                  <Image 
                    src={session?.user.image}
                    width={36}
                    height={36}
                    className="rounded-full"
                    alt="profile-picture"
                  />
                </Link>
              </>
            ) : (
              <>
                {providers && Object.values(providers).map((provider) => (
                  <Button
                    variant="subtle"
                    styles={{
                      label: { fontWeight: 400 },
                    }}
                    key={provider.name}
                    onClick={() => {signIn(provider.id)}}
                  >
                    Login
                  </Button>
                ))}
              </>
            )}

          </Group>

          {/* Mobile */}
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />

          <Drawer
            position="right"
            size="75%"
            opened={opened}
            onClose={toggle}
            title="Home page"
            overlayProps={{ backgroundOpacity: 0.5, blur: 1 }}
          >
            <Stack gap={10}>{items}</Stack>
            <Button
              fullWidth
              variant="filled"
              styles={{
                label: { fontWeight: 400 },
              }}
              className="mt-6"
            >
              Login
            </Button>
          </Drawer>
        </div>
      </Container>
    </header>
  );
};

export default Nav;