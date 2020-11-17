import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getFirestore} from './firebase/index'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const { id } = useParams()
    
    useEffect(() => {
        
        const db = getFirestore()
        const itemCollection = db.collection('items').where('__name__', '==', id)

        itemCollection.get().then((querySnapshot)=> {
            
            if (querySnapshot.size === 0) {
                console.log('No results')
            }
            setItem(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))[0])
        })
       
    }, [id])

    return (
        <>
            {item && <ItemDetail item={item} />}
        </>
    )

}

export default ItemDetailContainer