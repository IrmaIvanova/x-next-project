'use client'

import { PAGES } from "@/config/pages.config";
import { useParams, usePathname, useRouter } from "next/navigation";


export default function ProfileClient() {
    const params = useParams<{ userid: string }>()

    const router = useRouter()

    return (
        <div className="min-h-screen flex justify-center px-4 py-8">
            <div className="w-full max-w-xl">
                <h1 className="text-3xl font-bold mb-6">User Profile {`${params.userid}`}</h1>
                <button onClick={() => router.push(PAGES.HOME)}>
                    ← Go to home
                </button>
            </div>
        </div>
    );
}
