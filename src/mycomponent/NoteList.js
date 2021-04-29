import React from 'react';
import styles from "../css/NoteList.module.css";
import NoteItem from './NoteItem';

function NoteList({list,del,edit}) {

    return (
        <div>
            <ul className={styles.nonPadding}>
                {
                    list.map((item,index) =>{
                        return <NoteItem key={item.title} item={item} del={del} id={index} edit={edit}/>
                    })

                }
               
            </ul>
        </div>
    )
}

export default NoteList
