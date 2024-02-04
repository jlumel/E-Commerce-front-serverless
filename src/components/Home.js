import ItemListContainer from './ItemListContainer'

const Home = () => {

    const hora = new Date()

    let greeting

    if (hora.getHours() > 6 && hora.getHours() < 12) {
        greeting = 'Buen dia'
    } else if (hora.getHours() > 12 && hora.getHours() < 20) {
        greeting = 'Buenas tardes'
    } else {
        greeting = 'Buenas noches'
    }

    const title = `${greeting}. Bienvenidxs a nuestra tienda virtual!`

    return (
        <ItemListContainer title={title} />
    )
}

export default Home