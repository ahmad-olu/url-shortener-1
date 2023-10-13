'use client'

import Link from "next/link";


function LogOutForm({didSubmit}) {

    const handleForm = async (event)=>{
        event.preventDefault()
        
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        const JSONData = JSON.stringify(data)
        const endpoint = "api/auth/logout/"

        const options = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSONData
        }
        const response = await fetch(endpoint, options)
        if(response.status === 200){
            window.location.href="/login"
        }


    }
  return <>
  <form action="" onSubmit={handleForm}>
   <div>Are you sure you want to logout</div>
    <button type="submit"> yes continue</button>
    <Link href='/'> Go Home</Link>
  </form>
  </>;
}

export default LogOutForm;
