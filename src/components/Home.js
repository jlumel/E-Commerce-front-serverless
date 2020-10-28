import React from 'react';
import ItemListContainer from './ItemListContainer'

const Home = () => {

    const hora = new Date()

    let title

    if (hora.getHours() > 6 && hora.getHours() < 12) {
        title = 'Buen dia!'
    } else if (hora.getHours() > 12 && hora.getHours() < 20) {
        title = 'Buenas tardes'
    } else {
        title = 'Buenas noches'
    }
    return (
        <main>
            <ItemListContainer title={title} />
        </main>

    )
}

export default Home