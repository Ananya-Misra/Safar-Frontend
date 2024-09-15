import Head from "next/head";
import TravelPlanResult from "@/components/TravelPlanResult";

export default function TravelPlanPage() {
    return (
        <>
            <Head>
                <title>Travel Plan</title>
                <meta
                name="description"
                content="Safar: AI Travel planner app"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <TravelPlanResult />
            </main>
        </>
    );
}
