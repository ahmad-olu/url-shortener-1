import isValidURL from "@/app/lib/isValidURL";
const { NextResponse } = require("next/server");


export async function POST(request){
    //form data
    //api json post data
    const contentType = await request.headers.get('content-type')
    if(contentType !== "application/json"){
        return NextResponse.json({"error": "Invalid request"}, 
        {status: 415})
    }
    const data = await request.json()
    const url = data && data.url ? data.url : null
    const validURL = await isValidURL(url, ["jref.io", 
    "jref-io.vercel.app", process.env.NEXT_PUBLIC_VERCEL_URL])

    if (!validURL){
        return NextResponse.json({"message": `${url} is not valid`}, 
        {status: 400})
    }

    return NextResponse.json(data, {status: 201})
} 