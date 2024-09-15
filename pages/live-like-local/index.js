import Head from "next/head";
import LiveLikeLocal from "@/components/LiveLikeLocal";

export default function LiveLikeLocalPage() {
    return (
        <>
            <Head>
                <title>Safar | Live Like Local</title>
                <meta
                name="description"
                content="Safar: AI Travel planner app"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <LiveLikeLocal />
            </main>
        </>
    );
}
