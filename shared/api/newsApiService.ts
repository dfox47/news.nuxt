import { Article, GetArticlesParams, GetTopHeadlinesParams } from '~/shared/newsApi.types';
import { ElNotification } from "element-plus";

const apiKey = '38172b7f01cd493584dbb4de0f19f4b1';
const baseUrl = 'https://newsapi.org/v2';

export const newsApiService = () => {
  const getArticles = async (params: GetArticlesParams): Promise<Article[]> => {
    // const { data, error } = await useFetch<{ articles: Article[] }>('/default.json', {
    const { data, error } = await useFetch<{ articles: Article[] }>(`${baseUrl}/everything`, {
      params: {
        q: params.q,
        sortBy: params.sortBy || 'publishedAt',
        apiKey,
        pageSize: 100,
        from: params.from,
        to: params.to,
      },
    });

    if (error.value) {
      ElNotification({
        message: error.value,
        title: "Error fetching articles",
        type: "warning",
      });
    }

    return data.value?.articles || [];
  }

  const getTopHeadlines = async (params: GetTopHeadlinesParams): Promise<Article[]> => {
    const { data, error } = await useFetch<{ articles: Article[] }>(`${baseUrl}/top-headlines`, {
      params: {
        apiKey,
        category: params.category || 'business',
        country: params.country || 'us',
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