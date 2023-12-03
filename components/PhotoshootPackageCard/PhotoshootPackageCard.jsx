import { Paper, Text, Button, ThemeIcon, rem } from '@mantine/core';
import classes from './PhotoshootPackageCard.module.css';
import { IconArrowRight } from '@tabler/icons-react';

export default function PhotoshootPackageCard({ icon, title, desc }) {
  return (
    <Paper withBorder radius="sm" className={classes.card}>
      <ThemeIcon
        size="lg"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: 'cyan', to: 'gray' }}
      >
        {icon}
      </ThemeIcon>
      <Text size="xl" fw={500} mt="md">
        {title}
      </Text>
      {desc}
      <Button 
        fullWidth 
        color="gray.7" 
        rightSection={<IconArrowRight size={14} className={classes.arrowRotate} />} 
        className={classes.button}
      >
        Book now
      </Button>
    </Paper>
  );
}