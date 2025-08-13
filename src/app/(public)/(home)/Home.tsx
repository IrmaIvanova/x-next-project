import { ContentBox } from "@/components/ContentBox";
import { Tweet } from "@/components/Tweet";
import { TweetForm } from "@/components/TweetForm";
import type { ITweet } from "@/shared/types/tweet.interface";

interface HomeProps {
    tweets: ITweet[];
}

export default function Home({ tweets }: HomeProps)  {
  return (
    <ContentBox
      title={`Home`}

    >
      <div>
        <TweetForm />
        {
          tweets.length === 0 ?
            <div>No tweets</div>
            :
            tweets.map(tweet => <Tweet key={`key_id-${tweet.id}`} tweet={tweet} />)
        }
      </div>
    </ContentBox>
  );
}
