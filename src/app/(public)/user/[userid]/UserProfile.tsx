
'use client'
import { ContentBox } from "@/components/ContentBox";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const DynamicButtonToHome = dynamic(() => import('@/components/Button')
    .then((mod) => mod.ButtonToHome))

export default function ProfileClient() {
    const params = useParams<{ userid: string }>()

    return (
        <ContentBox
            title={`User Profile ${params.userid}`}
        >
            <DynamicButtonToHome />
        </ContentBox>

    );
}
