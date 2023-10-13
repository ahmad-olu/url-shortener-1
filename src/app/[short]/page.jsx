import React from "react";
import { getShortLinkRecords } from "@/app/lib/db";
import { notFound } from "next/navigation";
import getDomain from "../lib/getDomain";

async function triggerVisit(linkId){
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({linkId: linkId})
    }
    const domain = getDomain()
    const endpoint = `${domain}/api/visits/`
    return await fetch(endpoint, options)
}

async function ShortPage({params}) {
    const {short} = params
    if (!short){
        notFound()
    }
    const [record] = await getShortLinkRecords(short)
    if (!record){
        notFound()
    }
    const {url, id}= record
    if (!url){
        notFound()
    }
    if(id){
      await triggerVisit(id)
    }

    //redirect(url, "push") 
  return <h1>
    {url}
  </h1>;
}

export default ShortPage;
