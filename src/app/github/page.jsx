'use client'

import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res)=> res.json());


export default function GithubProfile(){
    const myGithubRepoProfile = "https://api.github.com/repos/ahmad-olu/url-shortener-1"
    const {data, error, isLoading} = useSWR(myGithubRepoProfile, fetcher)

    if(error) return "An error happened"
    if (isLoading) return 'Loading....'

    return (<div>
        <h1>{data.name}</h1>
        <h2> {data.description}</h2>
        <strong> {data.subscribers_count}</strong>
        <strong> {data.stargazers_count}</strong>
        <strong> {data.forks_count}</strong>
    </div>)


}