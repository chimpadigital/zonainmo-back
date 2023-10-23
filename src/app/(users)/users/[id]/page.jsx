"use client"
import { clerkClient } from "@clerk/nextjs";
import { useRouter } from "next/navigation"
import React from 'react'
import Image from "next/image";
import { useEffect, useState } from "react";
function page({ params }) { //sin usar params directo podemos usar el hook de useParams 
  const router = useRouter()
  const [id, setId] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {
    if (params.id) {
      fetch(`/crud_user/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setId(data?.id)
          setFirstName(data?.firstName)
          setLastName(data?.lastName)
        })
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`/crud_user/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({id, firstName, lastName}),
      headers: {
        'Content-type': 'application/json'
      }
    }) 
  }

  return (
    <form className=" bg-slate-600 p-20 m-5 rounded-xl " onSubmit={onSubmit}>
      <div
        className="bg-white overflow-hidden sm:rounded-lg"
        style={{
          boxShadow: `0px 20px 24px -4px rgba(16, 24, 40, 0.08)`,
        }}
      >
        <label htmlFor="titulo" className="font-bold p-5">
          USER ID
        </label>
        <div>
          <input type="text"
            id="titulo"
            className=" text-black flex border border-black"
            placeholder="Título de tarea"
            onChange={(e) => setId(e.target.value)}
            value={id}
          >
          </input>
        </div>

        <label htmlFor="titulo" className="font-bold p-5">
          First name
        </label>
        <div>
          <input type="text"
            id="titulo"
            className=" text-black flex border border-black"
            placeholder="Título de tarea"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          >
          </input>
        </div>
        <label htmlFor="titulo" className="font-bold p-5">
          Last name
        </label>
        <div>
          <input type="text"
            id="titulo"
            className=" text-black flex border border-black"
            placeholder="Título de tarea"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          >
          </input>
        </div>
      </div>
      <button type="submit"
        className="bg-blue-500 hover:bg-green-700 text-white font-bold  p-5 m-5 rounded"
      >Crear</button>
    </form>
  );
}

export default page
