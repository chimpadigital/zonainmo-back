
import Users from "@/components/Users"

import React from "react"; 

export default async function DashboardPage() {
   
/*   const res = await fetch('/crud_user') //direccion completa porque es primero
  const data = await res.json() */ 

  return ( 
    <Users/>  
  );
}