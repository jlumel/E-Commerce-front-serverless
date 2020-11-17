import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import { getFirestore } from './firebase/index'


const ItemListContainer = ({ title }) => {

    const [items, setItems] = useState(null)

    const { category } = useParams()

    useEffect(() => {
        
        const db = getFirestore()
        const itemCollection = category ? db.collection('items').where('category','==', category) : db.collection('items')

        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No results')
            }
            setItems(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })

    }, [category])

    return (
        <>
            <h2 className={'title'}>{title}</h2>
            {items && <ItemList items={items} />}

        </>
    )

}

export default ItemListContainer