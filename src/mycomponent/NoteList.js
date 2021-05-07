import React from 'react';
import styles from "../css/NoteList.module.css";
import NoteItem from './NoteItem';

function NoteList({list,del,edit,view,unhide}) {

    return (
        <>
            <ul className={`${styles.nonPadding} ${styles.wrapper} ${styles.container}`}>
                {
                    list.map((item,index) =>{
                        return <NoteItem key={item.id} item={item.data} visible={item.visible} del={del} i={index} edit={edit} id={item.id} view={view} unhide={unhide} />
                    })

                }
               
            </ul>
        </>
    )
}

export default NoteList
