import { ModeToggle } from "@/components/ModeToggle";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div>
              <ModeToggle />
            {children}
        </div>
    );
}
