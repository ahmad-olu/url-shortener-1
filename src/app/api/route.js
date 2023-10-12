const { NextResponse } = require("next/server");


export async function GET(){
    return NextResponse.json({hello:"World"})
} 

export async function POST(){
    //form data
    //api json post data
    return NextResponse.json({hello:"post"})
} 