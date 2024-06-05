import { newsApiService } from '~/shared/api';
import { Article } from "~/shared/types/newsApiTypes";

const model = ref<Article>()

export const useNewsPageController = () => {
  const apiService = newsApiService()
  const getNewsPage = async (url: string, search: string) => {
    try {
      const searchStroke = search || 'keyword'
      console.log('x', searchStroke)
      const result = await apiService.getArticles({ q: searchStroke });
      model.value = result.find((a) => a.url === String(url)) || ({} as Article);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  }

  return {
    model,
    getNewsPage
  }
}