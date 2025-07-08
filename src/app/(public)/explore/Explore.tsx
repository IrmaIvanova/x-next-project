'use client'

import { ContentBox } from "@/components/ContentBox";
import { useSearchParams } from "next/navigation";


export default function ExploreClient() {
    const searchParams = useSearchParams()

    const tag = searchParams.get('tag')

    return (
        <ContentBox
            title={`Explore ${!!tag ? `by #${tag}` : ""}`}
        />
    );
}