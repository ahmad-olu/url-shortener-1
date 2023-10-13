'use client'

import React, { useState } from "react";

import { Alert, Button, Label, TextInput } from 'flowbite-react';



function LinksCreateForm({didSubmit}) {
    const [results, setResults] = useState(null)
    const [message, setMessage] = useState(null)

    const handleForm = async (event)=>{
        event.preventDefault()
        
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        const JSONData = JSON.stringify(data)
        const endpoint = "api/links/"

        const options = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSONData
        }
        const response = await fetch(endpoint, options)

        const result = await response.json()
    
        setResults(result)
        if(didSubmit){
            didSubmit(result)
        }
        if(result.message){
            setMessage(result.message)
        }
    }
  return <>
  {message && <Alert color='warning'>{message}</Alert>}
  <form action="" onSubmit={handleForm} className="flex max-w-md flex-col gap-4">
    <div>
    <div className="mb-2 block">
          <Label
            htmlFor="url"
            value="Your Url"
          />
        </div>
        <TextInput
          id="url"
          placeholder="your url to shorten"
          required
          name="url"
          type="text"
        />
      </div>
    <Button type="submit">
        Shorten
      </Button>
  </form>
  </>;
}

export default LinksCreateForm;
