

import type { Metadata } from "next";
import ExploreClient from "./Explore";
import { Suspense } from "react";


export const metadata: Metadata = {
    title: "explore client"
}

export default function ExplorePage() {

    return <Suspense>
        <ExploreClient />
    </Suspense>;
}
