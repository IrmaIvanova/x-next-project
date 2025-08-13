'use client'

import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";
interface IButtonToHomeProps {
    link?: string;
    buttonText?: string
}
export function ButtonToHome({ link, buttonText }: IButtonToHomeProps) {
    const router = useRouter()

    return <button
        onClick={() => router.push(link ? link : PAGES.HOME)}
    >
        {buttonText ? buttonText : "← Go to home"}
    </button>

}