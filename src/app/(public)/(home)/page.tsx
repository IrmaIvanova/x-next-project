import { ContentBox } from "@/components/ContentBox";
import { Navbar } from "@/components/Navbar";
import { MAIN_PAGE_NAVBAR } from "@/shared/data/navbar.data";



export default function HomePage() {
    return (
        <ContentBox title={"My Next.js learning projects"}>
            <Navbar links={MAIN_PAGE_NAVBAR.links} />
        </ContentBox>
    );
}
