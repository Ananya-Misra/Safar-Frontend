import Head from "next/head";
import TravelPlan from "@/components/TravelPlan";

export default function TravelPlanPage() {
    return (
        <>
            <Head>
                <title>Explore</title>
                <meta
                name="description"
                content="Safar: AI Travel planner app"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <TravelPlan />
            </main>
        </>
    );
}
