type Params = { tag?: string }

export default async function TestPage({
    searchParams
}: {
    searchParams: Promise<Params>
}) {

    const { tag } = await searchParams

    return <div className="min-h-screen flex justify-center px-4 py-8">
        <div className="w-full max-w-xl">
            <h1 className="text-3xl font-bold mb-6">Explore test {!!tag && `by #${tag}`}</h1>

        </div>
    </div>
}