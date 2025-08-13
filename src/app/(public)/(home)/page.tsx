import Home from "./Home";
import { TWEETS } from "@/shared/data/tweets.data";



export default function HomePage() {
  return (
    <Home tweets={TWEETS}/>
  );
}
