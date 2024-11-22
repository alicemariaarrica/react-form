//Creare un semplice form con un campo input per il titolo di un articolo del blog. Al submit del form, mostrare la lista degli articoli inseriti, con la possibilità di cancellare ciascun articolo utilizzando un'icona.


import { useState } from 'react'

import ArticlesLogic from './components/ArticlesLogic.jsx'

function App() {

    return (
        <>

            <ArticlesLogic />
        </>

    )
}

export default App