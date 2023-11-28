"use client";

import { useRef, useState, useEffect } from "react";
import {
  Text,
  Group,
  Button,
  Input,
  Tooltip,
  Blockquote,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import {
  IconCloudUpload,
  IconX,
  IconDownload,
  IconFile,
} from "@tabler/icons-react";
import classes from "./DropzoneButton.module.css";

function FileDetails({ file, onGenreChange, onAltTextChange }) {
  return (
    <div key={file.name}>
      <Blockquote radius="xs" mt="xs" className={classes.blockquote}>
        {file.name}
      </Blockquote>
      <Tooltip
        label="Example: ['street', 'long-exposure']"
        color="gray.8"
        position="top-start"
        offset={0}
      >
        <Input
          radius="xs"
          placeholder="Genre"
          mt="xs"
          onChange={onGenreChange}
        />
      </Tooltip>
      <Tooltip
        label="Enter descriptive text for accessibility & SEO purposes."
        color="gray.8"
        position="top-start"
        offset={0}
      >
        <Input
          radius="xs"
          placeholder="Alt text"
          mt="xs"
          onChange={onAltTextChange}
        />
      </Tooltip>
    </div>
  );
}

export default function DropzoneButton() {
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery("(max-width: 40em)");
  const openRef = useRef(null);
  const fileIcon = <IconFile />;

  const [file, setFile] = useState(null);
  const [genre, setGenre] = useState("");
  const [altText, setAltText] = useState("");

  const handleDrop = (files) => {
    console.log("Accepted file", files[0]);
    setFile(files[0]);
  };

  const handleSubmit = async () => {
    console.log(file);
    console.log(genre);
    console.log(altText);

    try {
      const response = await fetch('api/gallery', {
        method: 'POST',
        body: JSON.stringify({
          file,
          genre,
          altText
        })
      })

      if (response.ok) {
        console.log('Submit Successfully!')
      }
    } catch (error) {
      console.log(error);      
    }
  };

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={(files) => handleDrop(files)}
        onReject={(files) => console.log("rejected files", files)}
        className={classes.dropzone}
        radius="md"
        multiple={false}
        accept={IMAGE_MIME_TYPE}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                style={{ width: rem(50), height: rem(50), marginTop: rem(16) }}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Photo less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>Upload new photo</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            Drag &apos;n&apos; drop photo here to upload.
          </Text>
        </div>
      </Dropzone>

      {!file ? (
        <Button
          className={classes.control}
          size="md"
          radius="xl"
          onClick={() => openRef.current?.()}
        >
          Select files
        </Button>
      ) : (
        <>
          <FileDetails
            file={file}
            onGenreChange={(e) => setGenre(e.target.value)}
            onAltTextChange={(e) => setAltText(e.target.value)}
          />
          <Button
            variant="filled"
            fullWidth={isSmallScreen}
            radius="xs"
            className={classes.submitButton}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </>
      )}
    </div>
  );
}
