import { Article, GetArticlesParams, GetTopHeadlinesParams } from '~/shared/newsApi.types';
import { ElNotification } from "element-plus";

const apiKey = '5cc5ea6884f24fca80c7968fbb95e641'; // Замените на ваш API-ключ от NewsAPI
const baseUrl = 'https://newsapi.org/v2';

export const newsApiService = () => {
    const getArticles = async (params: GetArticlesParams): Promise<Article[]> => {
        const { data, error } = await useFetch<{ articles: Article[] }>(`${baseUrl}/everything`, {
            params: {
                q: params.q,
                sortBy: params.sortBy || 'publishedAt',
                apiKey,
                pageSize: 20,
                from: params.from,
                to: params.to,
            },
        });
        if (error.value) {
            ElNotification({
                title: "Error fetching articles",
                message: error.value,
                type: "warning",
            });
        }
        return data.value?.articles || [];
    }

    const getTopHeadlines = async (params: GetTopHeadlinesParams): Promise<Article[]> => {
        const { data, error } = await useFetch<{ articles: Article[] }>(`${baseUrl}/top-headlines`, {
            params: {
                country: params.country || 'us',
                category: params.category || 'business',
                apiKey,
            },
        });
        if (error.value) {
            console.error('Error fetching top headlines:', error.value);
            throw error.value;
        }
        return data.value?.articles || [];
    }

    return {
        getArticles,
        getTopHeadlines
    }
}