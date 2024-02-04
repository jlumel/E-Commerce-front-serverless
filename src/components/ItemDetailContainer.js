import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getFirestore} from './firebase/index'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const { id } = useParams()
    
    useEffect(() => {
        
        const db = getFirestore()
        const itemCollection = db.collection('items')
        const item = itemCollection.doc(id)

        item.get().then(doc=> {
            
            if (!doc.exists) {
                console.log('No results')
                return
            }
            setItem({id: doc.id, ...doc.data()})
        })
       
    }, [id])

    return (
        <>
            {item && <ItemDetail item={item} />}
        </>
    )

}

export default ItemDetailContainer