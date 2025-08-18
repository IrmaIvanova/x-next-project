import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
    return (
        <div  className="bg-indigo-200 bg-image dark:bg-black  dark:dark-bg-image bg-cover bg-center ">
        {/* <div  className="bg-indigo-200 bg-[url('/home-bg-image.png')] dark:bg-black  dark:bg-[url('/home-bg-image-dark.png')] bg-cover bg-center "> */}
            <Button className="fixed m-2"
            buttonText={"← Go to main project page"} link={"/"} />
            <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
                <div className="flex flex-col gap-6 p-12 rounded-xl bg-white/90 
                dark:bg-black w-4/5 sm:max-w-96 mx-auto text-black 
                dark:text-white sm:test-2xl">
                    <h1 className="text-4xl font-bold">Repair Shop</h1>
                    <address> 
                        111 Sant Han street <br />
                        Kuroland, KRL 11111
                    </address>
                    <p>
                        Open Daily: 9am to 5pm
                    </p>
                    <Link href="tel:1111111111" className="hover:underline">
                        111-111-1111
                    </Link>
                </div>
            </main>



        </div>
    );
}
