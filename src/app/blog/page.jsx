import React from "react";
import getDomain from "@/app/lib/getDomain";
import BlogCard from '@/app/blog/card';
import { helloWorld } from "@/app/lib/db";




async function getData(){
  const domain = getDomain()
  const endpoint = `${domain}/api/posts`

  // const res = await fetch(endpoint, {
  //   next:{
  //     revalidate:10,
  //   }
  // })
  const res = await fetch(endpoint, {
    cache:'no-store'
  })

  if (!res.ok){
    throw new Error("Failed to fetch data")
  }
  if(res.headers.get("content-type") !== "application/json"){
    return {items:[]}
  }

  return res.json()
}


async function BlogPage() {
  const data = await getData()
  const dbHello = await helloWorld()
  const items = data && data.items ? [ ...data.items]: []
  return <main>
    <h1>Hello world</h1>
    <p>DB Response: {JSON.stringify(dbHello)}</p>
    <p>Posts:</p>
    {items && items.map((item, idx)=>{
      return <BlogCard title={item.title} key={`post-${idx}`}/>
    })}
  </main>;
}

export default BlogPage;



export const runtime = 'edge' //nodejs -< default
export const preferredRegion = 'iad1' /// auto