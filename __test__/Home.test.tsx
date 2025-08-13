import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import type { ITweet } from '@/shared/types/tweet.interface';
// 1. Мокаем server action перед импортами
jest.mock('@/server-actions/post-tweet', () => ({
    postTweet: jest.fn().mockImplementation(async (formData: FormData) => {
        // console.log('Mocked postTweet called with:', formData.get('content'));
        return { success: true };
    })
}));

import Home from '@/app/(public)/x-project/(home)/Home'
import { TWEETS } from '@/shared/data/tweets.data';


describe('HomePage', () => {

    it('renders ContentBox with title and tweets', () => {

        render(<Home tweets={TWEETS}/>);

        // Проверка заголовка ContentBox
        const heading = screen.getByRole('heading', { level: 1, name: 'Home' });

        expect(heading).toBeInTheDocument();

        // Проверка наличия формы твита
        expect(screen.getByTestId('tweet-form')).toBeInTheDocument();

        // Проверка количества твитов из моковых данных
        const tweets = screen.getAllByTestId('tweet');
        expect(tweets).toHaveLength(TWEETS.length);
    });

    it('passes correct props to Tweet components', () => {


        render(<Home tweets={TWEETS}/>);

        TWEETS.forEach((tweet: ITweet) => {
            expect(screen.getByText(tweet.text)).toBeInTheDocument();
        });
    });

    it('assigns unique keys to tweets', () => {

        render(<Home tweets={TWEETS}/>);
        const tweets = screen.getAllByTestId('tweet');
        // console.log("tweets", tweets.length)
        const keys = tweets.map(tweet => tweet.dataset.key);
        const uniqueKeys = new Set(keys);

        expect(uniqueKeys.size).toBe(TWEETS.length);
    });

    it('should submit tweet form', async () => {
        const { postTweet } = require('@/server-actions/post-tweet');

        render(<Home tweets={TWEETS}/>);

        // 3. Вводим текст
        await userEvent.type(
            screen.getByPlaceholderText("What's happening?"),
            'New tweet content'
        );

        // 4. Отправляем форму
        await userEvent.click(screen.getByText('Tweet'));

        // 5. Проверяем вызов
        expect(postTweet).toHaveBeenCalled();

        // 6. Проверяем аргументы
        const formData = postTweet.mock.calls[0][0];
        expect(formData.get('content')).toBe('New tweet content');

    });

    it('shows empty state if no tweets', () => {
        // Мокаем данные
        jest.mock('@/shared/data/tweets.data', () => ({
            TWEETS: [],
        }));

        const { TWEETS } = require('@/shared/data/tweets.data');
        render(<Home tweets={TWEETS}/>);
        expect(screen.getByText('No tweets')).toBeInTheDocument();
    });
})