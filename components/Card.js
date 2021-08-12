import React from 'react'
import styles from '../styles/Card.module.css'
import {useRouter} from 'next/router'
function Card({title,feature_image,id}) {
    const router = useRouter();
    return (
        <div onClick={()=>router.push(`/posts/${id}`,`/posts/${id}`)} className={styles.card} style={{backgroundImage:`url(${feature_image})`}}>
            <p className={styles.date}>1 May 2021</p>
            <h2 className={styles.header}>
                {title}
            </h2>
        </div>
    );
}

export default Card
