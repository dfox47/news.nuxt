import { newsApiService } from '~/shared/api';
import { Article } from "~/shared/types/newsApiTypes";

const model = ref<{list: Article[]}>({
  list: []
})

const currentSearch = ref('')

export const useNewsController = () => {
  const apiService = newsApiService()
  const getNews = async () => {
    try {
      const searchStroke = currentSearch.value || 'keyword'
      model.value.list = await apiService.getArticles({ q: searchStroke })
    } catch (err) {
      throw err
    }
  }

  return {
    model,
    currentSearch,
    getNews
  }
}