
'use client'
import { ContentBox } from "@/myComponents/ContentBox";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const DynamicButtonToHome = dynamic(() => import('@/components/ui/button')
    .then((mod) => mod.Button))

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
