'use client'

import React, { useState } from "react";
import { Alert } from "flowbite-react";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';



function LoginForm({didSubmit}) {
    const [results, setResults] = useState(null)
    const [message, setMessage] = useState(null)

    const handleForm = async (event)=>{
        event.preventDefault()
        
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        const JSONData = JSON.stringify(data)
        const endpoint = "api/auth/login/"

        const options = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSONData
        }
        const response = await fetch(endpoint, options)
        if(response.status === 200){
            window.location.href="/"
        }

        const result = await response.json()
        
        setResults(result)
        if(didSubmit){
            didSubmit(result)
        }
        if (result.message){
            setMessage(result.message)
        }
    }
  return <>
  {message && <Alert color="warning">{message}</Alert>}
  <form className="flex max-w-md flex-col gap-4" action="" onSubmit={handleForm}>
  <div>
        <div className="mb-2 block">
          <Label
            htmlFor="username"
            value="Your username"
          />
        </div>
        <TextInput
          id="username"
          placeholder="Your username..."
          required
          name="username"
          type="text"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          required
          name="password"
          placeholder="*****"
          type="password"
        />
      </div>
    <Button type="submit">
        Log in
      </Button>
  </form>
  </>;
}

export default LoginForm;
