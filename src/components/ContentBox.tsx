import type { ReactNode } from "react";
import { PageTitle } from "./PageTitle";

interface ContentBoxProps {
    title?: string;
    children?: ReactNode
}
export function ContentBox({ children, title }: ContentBoxProps) {
    return (
        <div className="min-h-screen flex justify-center px-4 py-8">
            <div className="w-full max-w-xl">
                {title && <PageTitle title={title} />}
                {children && children}
            </div>
        </div>
    )
}
