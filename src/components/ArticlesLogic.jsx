import { useState } from 'react';
import initialarticles from '../data/articles.js'

export default function ArticlesLogic() {
    const [articles, setArticles] = useState(initialarticles)
    const [newArticle, setNewArticle] = useState('')
    function addArticle(e) {
        e.preventDefault()
        console.log(e); //dopo aver controllato se ho bug devo toglierla
        setArticle([
            ...article,
            newArticle

        ])
        setNewArticle('')

    }

    function deleteArticle(objectEvent) {
        console.log(objectEvent.target);

        const indexToDelete = Number(objectEvent.target.getAttribute('data-index'));
        console.log(article, indexToDelete);

        const newArticles = article.filter((article, index) => index != indexToDelete);
        console.log(newArticles);
        setArticle(newArticles)


    }

}


