import { PAGES } from "@/config/pages.config"
import type { ITweet } from "@/shared/types/tweet.interface"
import Image from "next/image"
import Link from "next/link"
import { XLogo } from "./XLogo"

interface Props {
    tweet: ITweet,

}

export function Tweet({ tweet }: Props) {
    return <div
        data-testid="tweet"
        data-key={tweet.id}
        className="border border-black/10 dark:border-white/10  rounded-xl p-4 bg-white text-black dark:bg-black dark:text-white shadow-md mb-4">
        <div className="flex items-center gap-3 mb-2">
            <XLogo />

            <Link
                href={PAGES.PROFILE(tweet.author.id)}
                className="font-semibold">
                @{tweet.author.name}
            </Link>
        </div>
        <p className="text-black/90 dark:text-white/90">{tweet.text}</p>
    </div>

}