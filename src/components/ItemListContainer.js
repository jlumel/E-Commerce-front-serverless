import React from 'react'

const ItemListContainer = ({title})=> {
    let hora = new Date()

    if (hora.getHours() > 6 && hora.getHours() < 12) {
        title = 'Buen dia!'
    } else if (hora.getHours() > 12 && hora.getHours() < 20) {
        title = 'Buenas tardes'
    } else {
        title = 'Buenas noches'
    }
return (
    
<h2 style={{ fontFamily: 'Roboto' , marginLeft: '0.5vw'}}>{title}</h2>
)

}

export default ItemListContainer