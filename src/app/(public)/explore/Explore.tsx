'use client'

import { useSearchParams } from "next/navigation";


export default function ExploreClient() {
    const searchParams = useSearchParams()

    const tag = searchParams.get('tag')

    return (
        <div className="min-h-screen flex justify-center px-4 py-8">
            <div className="w-full max-w-xl">
                <h1 className="text-3xl font-bold mb-6">Explore {!!tag && `by #${tag}`}</h1>

            </div>
        </div>
    );
}