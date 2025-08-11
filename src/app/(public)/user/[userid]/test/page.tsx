import { ContentBox } from "@/components/ContentBox"

type Params = { userid: string }

export default async function TestProfilePage({
    params
}: {
    params: Promise<Params>
}) {

    const { userid } = await params

    return <ContentBox
        title={`User Profile ${userid}`}
    />
}