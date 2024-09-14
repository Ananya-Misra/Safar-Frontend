import Head from "next/head";
import { Container, Title, Divider, Group } from "@mantine/core";
import AuthenticationForm from "@/components/AuthenticationForm";

export default function LogIn() {
  return (
    <>
      <Head>
        <title>Chitz | Log In</title>
        <meta
          name="description"
          content="An education portal for computer science students"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container fluid mr={30}>
          <Title order={2} mb={15}>
            Log In / Register
          </Title>
        </Container>
        <Divider my="sm" />
        <Group position="center">
          <AuthenticationForm />
        </Group>
      </main>
    </>
  );
}
