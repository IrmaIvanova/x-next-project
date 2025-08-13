import { ButtonToHome } from "@/components/Button";

export default function HomePage() {
    return (
        <div>
            <div> ⏳ "The project is still in progress."
             </div>
             <ButtonToHome buttonText={" ← Go to main project page"} link={"/"}/>
             </div>
    );
}
