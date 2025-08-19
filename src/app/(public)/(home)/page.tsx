import { ModeToggle } from "@/components/ModeToggle";
import { ContentBox } from "@/myComponents/ContentBox";
import { Navbar } from "@/myComponents/Navbar";
import { MAIN_PAGE_NAVBAR } from "@/shared/data/navbar.data";



export default function HomePage() {
    return (
        <div>
            <div className="absolute right-0">
                <ModeToggle />
            </div>
            <ContentBox title={"My Next.js learning projects"}>

                <Navbar links={MAIN_PAGE_NAVBAR.links} />
            </ContentBox>
        </div>
    );
}
