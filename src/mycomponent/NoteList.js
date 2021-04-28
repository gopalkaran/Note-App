import React from 'react'
import NoteItem from './NoteItem'

function NoteList({list}) {

    return (
        <div>
            <ul>
                {
                    list.map(item =>{
                        return <NoteItem key={item.title} item={item}/>
                    })

                }
               
            </ul>
        </div>
    )
}

export default NoteList
