import { useState } from 'react';
import initialarticles from '../data/articles.js'

export default function ArticlesLogic() {
    const [articles, setArticles] = useState(initialarticles)
    const [newArticle, setNewArticle] = useState('')
    function addArticle(e) {
        e.preventDefault()
        console.log(e); //dopo aver controllato se ho bug devo toglierla
        setArticle([
            ...articles,
            newArticle

        ])
        setNewArticle('')

    }

    function deleteArticle(objectEvent) {
        console.log(objectEvent.target);

        const indexToDelete = Number(objectEvent.target.getAttribute('data-index'));
        console.log(article, indexToDelete);

        const newArticles = article.filter((articles, index) => index != indexToDelete);
        console.log(newArticles);
        setArticles(newArticles)


    }

    return (
        <div>
            <h1>Gestione Articoli Blog</h1>
        </div>)
}

//Creare un semplice form con un campo input per il titolo di un articolo del blog. Al submit del form, mostrare la lista degli articoli inseriti, con la possibilità di cancellare ciascun articolo utilizzando un'icona.


