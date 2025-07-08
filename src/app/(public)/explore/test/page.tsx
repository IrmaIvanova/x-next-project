import { ContentBox } from "@/components/ContentBox"

type Params = { tag?: string }

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