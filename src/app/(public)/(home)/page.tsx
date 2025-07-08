import { ContentBox } from "@/components/ContentBox";
import { Tweet } from "@/components/Tweet";
import { TWEETS } from "@/shared/data/tweets.data";

export default function Home() {
  return (
    <ContentBox
      title={`Home`}
      children={TWEETS.map(tweet => <Tweet key={`key_id-${tweet.id}`} tweet={tweet} />)}
    />
  );
}
