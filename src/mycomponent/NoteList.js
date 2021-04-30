import React from 'react';
import styles from "../css/NoteList.module.css";
import NoteItem from './NoteItem';

function NoteList({list,del,edit}) {

    return (
        <div>
            <ul className={styles.nonPadding}>
                {
                    list.map((item,index) =>{
                        return <NoteItem key={item.id} item={item.data} del={del} i={index} edit={edit} id={item.id}/>
                    })

                }
               
            </ul>
        </div>
    )
}

export default NoteList
