'use client'

import { ContentBox } from "@/components/ContentBox";
import { PAGES } from "@/config/pages.config";
import { useParams,  useRouter } from "next/navigation";


export default function ProfileClient() {
    const params = useParams<{ userid: string }>()

    const router = useRouter()

    return (
        <ContentBox
            title={`User Profile ${params.userid}`}
        >
            <button onClick={() => router.push(PAGES.HOME)}>
                ← Go to home
            </button>
        </ContentBox>

    );
}
