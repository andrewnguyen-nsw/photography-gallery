import { Group, Card, Overlay, Button, Text } from "@mantine/core";
import classes from "./GenresCard.module.css";

export default function GenresCard({title, description, image}) {
  return (
    <Card radius="sm" className={classes.card} style={{ backgroundImage: `url(${image})` }}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Text size="xl" fw={700} className={classes.title}>
          {title}
        </Text>

        <Text size="sm" className={classes.description}>
          {description}
        </Text>

        <Button
          className={classes.action}
          variant="white"
          color="dark"
          size="xs"
        >
          Explore
        </Button>
      </div>
    </Card>
  );
}
