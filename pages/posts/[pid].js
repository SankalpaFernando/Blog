import {getPostByID} from '../../lib/post.js'
import Image from 'next/image'
import styles from '../../styles/[pid].module.css'
import readingTime from 'reading-time';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'

import moment from 'moment'
export const getServerSideProps = async({params}) =>{
console.log("🚀 ~ file: [pid].js ~ line 9 ~ getServerSideProps ~ params", params)
const post = await getPostByID(params)
return{
    props:{
        post
    }
}
}
// export const getStaticPaths  =async()=>{
//     return{
//         paths: [
//             { params: { pid: '1' } },
//           ],
//           fallback:true
//     }
// }
export default function Post({post}) {
    console.log("🚀 ~ file: [pid].js ~ line 20 ~ Post ~ post", post)
    return (
        <>
            <Head>
                <title>{post[0].title}</title>
                <meta property="og:title" content={post[0].meta_title}></meta>
                <meta property="og:description" content={post[0].meta_description}></meta>
            </Head>
            <div className={styles.headerHolder}>
            <h1 className={styles.header}>{post[0].title}</h1>
            <p style={{color:"#868789",fontSize:"2rem"}}>{post[0].custom_excerpt}</p>
            <p style={{color:"#A0A4A7",fontSize:"1.4rem",margin:"1rem 0rem"}}>{readingTime(post[0].html).text} • {moment(post[0].published_at).format('DD MMM YYYY')}</p>
            </div>
            <div className={styles.imageHolder}>
                <img src={post[0].feature_image} alt="newImg" />
            </div>
            <div className="gh-content" dangerouslySetInnerHTML={{__html:post[0].html}}>
                
            </div>
            <div className="footer" style={{position:"relative"}}>
        Copyright @ Sankalpa
      </div>
        </>
    )
}




