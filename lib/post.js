import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://sankalpa.ghost.io',
    key: `${process.env.NEXT_PUBLIC_KEY}`,
    version: "v3"
  });
  
  export async function getPosts(query) {
    const params={
        limit: 6,
        include:"tags",
    }
    if(query!=='all'){
        params.filter=`primary_tag:${query}`
    }
    return await api.posts
      .browse(params)
      .catch(err => {
        console.error(err);
      });
  }
  export async function getTags() {
    return await api.tags
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }
  export async function getPostByID(params) {
    console.log("🚀 ~ file: post.js ~ line 33 ~ getPostByID ~ params", params)
    return await api.posts
      .browse({
        filter:`id:${params.pid}`
      })
      .catch(err => {
        console.error(err);
      });
  }