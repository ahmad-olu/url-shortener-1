'use client'


import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Alert } from "flowbite-react";
import React, { useState } from "react";



function RegisterForm({didSubmit}) {
    const [results, setResults] = useState(null)
    const [message, setMessage] = useState(null)

    const verifyPassword = (event)=>{
        
    }

    const handleForm = async (event)=>{
        event.preventDefault()
        
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        const JSONData = JSON.stringify(data)
        const endpoint = "api/auth/register/"

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
        if (result.message){
            setMessage(result.message)
        }

        if(response.status === 201){
            window.location.href = "/login"
        }
    }
  return <>
  {message && <Alert color="warning">{message}</Alert>}
  <form className="flex max-w-md flex-col gap-4" action="" onSubmit={handleForm}>
  <div>
        <div className="mb-2 block">
          <Label
            htmlFor="username"
            value="Pick a username"
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
            htmlFor="email"
            value="Your Email email"
          />
        </div>
        <TextInput
          id="email"
          placeholder="Your email..."
          required
          name="email"
          type="email"
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
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password2"
            value="Confirm your password"
          />
        </div>
        <TextInput
          id="password2"
          required
          name="passwordConfirm"
          placeholder="Confirm your ***"
          type="password"
        />
      </div>
    <Button type="submit">
        Log in
      </Button>
  </form>
  </>;
}

export default RegisterForm;
