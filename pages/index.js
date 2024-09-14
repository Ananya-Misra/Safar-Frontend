import Head from "next/head";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Safar | Home</title>
      </Head>

      <main>
          <HeroSection />
      </main>
    </>
  );
}
