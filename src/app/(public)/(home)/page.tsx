import { Tweet } from "@/components/Tweet";
import { TWEETS } from "@/shared/data/tweets.data";


const tweetFirst = {
  "id": 1,
  "author": "elonmusk",
  "text": "Just launched a new rocket to Mars! 🚀 #SpaceX",
  "likes": 54231,
  "retweets": 12456,
  "date": "2023-10-15T12:30:00Z"
}

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6">Home</h1>
        {TWEETS.map(tweet => <Tweet key={`key_id-${tweet.id}`} tweet={tweet} />)}


      </div>
    </div>
  );
}
