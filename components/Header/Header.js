import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  useMantineColorScheme,
  ActionIcon,
  Title,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { IconSun, IconMoonStars } from "@tabler/icons";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    borderBottom: 'none'
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

const HeaderSearch = () => {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
          <Link href="/">
            <Title order={3}>Safar</Title>
          </Link>
        </Group>

        <Group>
          <ActionIcon
            aria-label="switch color scheme"
            onClick={() => toggleColorScheme()}
            size="lg"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.yellow[4]
                  : theme.colors.blue[6],
            })}
          >
            {colorScheme === "dark" ? (
              <IconSun size="20" aria-label="light color scheme icon" />
            ) : (
              <IconMoonStars size="20" aria-label="dark color scheme icon" />
            )}
          </ActionIcon>

          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size={16} stroke={1.5} />}
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
          />
        </Group>
      </div>
    </Header>
  );
};

export default HeaderSearch;
