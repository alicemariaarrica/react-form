
import { useState } from 'react';
import articles from './data/articles.js'

export default function ArticlesLogic() {
    const [articles, setArticles] = useState(articles)
    const [newArticle, setNewArticle] = useState('')
}