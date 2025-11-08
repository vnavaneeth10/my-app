import type { ModelDetailPageProps } from "@/app/types"

export default async function ModelDetailPage({ params }: ModelDetailPageProps) {

    const { id } = await params
    return <h1>The id of this model is {id}</h1>
}