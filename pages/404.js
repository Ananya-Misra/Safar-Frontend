import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: "8.75rem",
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3],

    [theme.fn.smallerThan("sm")]: {
      fontSize: "5.5rem",
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: "2rem",
    margin: "1.5rem 0",
    color:
      theme.colorScheme === "light"
        ? theme.colors.dark[4]
        : theme.colors.dark[1],

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1.5rem",
    },
  },

  description: {
    maxWidth: "31.25rem",
    margin: "auto",
    marginTop: theme.spacing.xl,
    fontSize: "1rem",
  },

  button: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[2],
    color:
      theme.colorScheme === "light"
        ? theme.colors.dark[4]
        : theme.colors.dark[1],

    ":hover": {
      background:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
    },
  },
}));

const NotFound = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        You may have mistyped the address, or the page has been moved to another
        URL.
      </Text>
      <Group position="center" mt="3rem">
        <Link href="/" size="md">
          <Button className={classes.button}>Go back to home page</Button>
        </Link>
      </Group>
    </Container>
  );
};

export default NotFound;
