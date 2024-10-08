import React from "react";
import { useState } from "react";
import Link from "next/link";
import { createStyles, Navbar as MantineNav, Group, Code } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[2]
        }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: "/question-papers", label: "Question Papers" },
  { link: "/guides-and-resources", label: "Guides & Resources" },
  { link: "/exam-results", label: "Exam Results" },
  { link: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Exam Papers");

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <MantineNav height={680} width={{ sm: 300 }} p="md">
      <MantineNav.Section grow>
        {links}
      </MantineNav.Section>

      <MantineNav.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <span>My Account</span>
        </a>

        <Link
          href="/login"
          className={cx(classes.link, {
            [classes.linkActive]: "Login" === active,
          })}
          onClick={() => {
            setActive("Login");
          }}
        >
          <span>Login</span>
        </Link>
      </MantineNav.Section>
    </MantineNav>
  );
};

export default Navbar;
