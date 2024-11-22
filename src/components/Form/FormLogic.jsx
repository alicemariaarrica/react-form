import { useState } from 'react';

<form onSubmit={addArticle}>
    <input
        type="text"
        value={newArticle}
        onChange={(e) => setNewArticle(e.target.value)}
        placeholder="Inserisci il titolo dell'articolo"
        required
    />
    <button type="submit">Aggiungi Articolo</button>
</form>