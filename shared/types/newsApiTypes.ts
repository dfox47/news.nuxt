export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    content: string | null;
    description: string | null;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string | null;
}

export interface GetArticlesParams {
    q: string;
    sortBy?: 'publishedAt' | 'relevancy' | 'popularity';
    from?: string;
    to?: string;
}

export interface GetTopHeadlinesParams {
    country?: string;
    category?: 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
}