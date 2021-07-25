import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Search from '../components/Search'
import Card from '../components/Card'

import {getPosts,getTags,getPostByID} from '../lib/post'
export const  getServerSideProps = async({query}) =>{
    const posts = await getPosts(query.tag||'all')
    const tags = await getTags()
    return{
      props:{
        posts,
        tags
      }
    }
  }

  export default function Home({posts,tags}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sankalpa&apos;s Blog</title>
        <meta name="title" content="The Blog of Sankalpa Fernando" />
         <meta property="description" content="I'm Sankalpa Fernando and this is my blog where I discuss about the current web and software development trends. Meanwhile, I share my thoughts about new technologies through this blog."></meta>
        {/* <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" /> */}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <h2 className={styles.blog}>
        Sankalpa&apos;s Blog 

      </h2>
      <div className={styles.sidemain}>
        <Search tags={tags} />
      </div>
      <div className={styles.cardholder}>
        {
          posts.map(post=>{
            return(
              <Card key={post.id} id={post.id} title={post.title} feature_image={post.feature_image}/>
            )
          })
        }
      </div>
    </div>
  )
}


