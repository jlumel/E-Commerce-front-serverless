import React from 'react';
import ItemListContainer from './ItemListContainer'

const Home = ({ title }) => {
    let hora = new Date()

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