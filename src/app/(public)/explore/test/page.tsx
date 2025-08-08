import { ContentBox } from "@/components/ContentBox"
import type { Metadata } from "next"

type Params = { tag?: string }

export async function generateMetadata({
    searchParams

}:{
    searchParams:Promise<Params>
}):Promise<Metadata> {
    return {
        title: '#'+ (await searchParams).tag
    }
}


export default async function TestPage({
    searchParams
}: {
    searchParams: Promise<Params>
}) {

    const { tag } = await searchParams

    return <ContentBox
        title={`Explore ${!!tag ? `by #${tag}` : ""}`}
    />
}