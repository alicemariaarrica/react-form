
import { useState } from 'react';
import articles from './data/articles.js'

export default function ArticlesLogic() {
    const [articles, setArticles] = useState(articles)
    const [newArticle, setNewArticle] = useState('')
}

function addArticle(e) {

    e.preventDefault()
    console.log(e); //dopo aver controllato se ho bug devo toglierla
    setArticle([
    ..article,
        newArticle

    ])
    setNewArticle('')

}