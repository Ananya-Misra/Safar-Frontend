import Head from "next/head";
import { Container, Title, Divider } from "@mantine/core";
import ContactForm from "@/components/ContactForm";

export default function ExamResults() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <main>
        <ContactForm />
      </main>
    </>
  );
}