import Image from "next/image";

export function XLogo() {
    return <>
        <Image
            src='/blackXlogo.svg'
            alt='X logo'
            width={24}
            height={24}
            className="block dark:hidden"
        />
        <Image
            src='/x-logo.svg'
            alt='X logo'
            width={24}
            height={24}
            className="hidden dark:block" />
    </>
}