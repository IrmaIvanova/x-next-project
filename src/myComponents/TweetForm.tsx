'use client'; // Важно: делаем компонент клиентским

import { Button } from "@/components/ui/button";
import { postTweet } from "@/server-actions/post-tweet";
import { useFormStatus } from "react-dom";


export function TweetForm() {
    const { pending } = useFormStatus();

    return <form
        data-testid="tweet-form"
        action={postTweet}
        className="border dark:border-white/10 rounded-xl p-4  dark:text-white space-y-3 mb-5"
    >
        <input
            name="content"
            placeholder="What's happening?"
            className="w-full bg-transparent outline-none text-sm placeholder-gray-500" />
        <div className="flex justify-end">
           
            <Button type="submit"
            variant={"ghost"}
                disabled={pending}
                buttonText={pending ? 'Posting...' : 'Tweet'} />
        </div>
    </form>
}