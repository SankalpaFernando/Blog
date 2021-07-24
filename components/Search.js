import React from 'react'
import styles from '../styles/Search.module.css'
import {useRouter} from 'next/router'
function Search({tags}) {
    const router = useRouter()
    const onClick=(slug)=>{
        router.push(slug,slug)
    }
    return (
        <div className={styles.main}>
            {/* <input className={styles.input} type="text"/> */}
            <div className={styles.chipholder}>
            <Chip slug="" onClick={onClick} text="All" selected={!router.query.tag} />
                {
                    tags.map(tag=>{
                        const selected = router.query.tag === tag.slug
                    return (<Chip slug={tag.slug} onClick={onClick} text={tag.name} key={tag.id} selected={selected} />)
                    
                })
            }
            <Chip slug="" onClick={onClick} text="Portfolio" selected={false} />
            </div>
        </div>
    )
}


function Chip ({text,onClick,slug,selected}){
    return(
        <button onClick={()=>onClick(`/?tag=${slug}`)} className={styles.chip} style={selected?({backgroundColor:"rgba(78, 78, 78, 0.856)",color:"#FFF"}):({backgroundColor:"#F5F5F5",color:"#8F8F8F"})} >
            {text}
        </button>
    )
}

export default Search
