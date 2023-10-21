 
import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";


import Image from "next/image";
import React from "react"; 

export default async function DashboardPage() {
  var userMap =   await clerkClient.users.getUserList({
    orderBy: '-created_at'
  });


  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">First Name</th> 
        </tr>
      </thead>
      <tbody className="t-body">
      {userMap.map(user => (
          <tr key={userMap.id}>
            <th scope="row">
              <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                <div className="list-thumb">
                  <Image
                    width={110}
                    height={94}
                    className="w-100"
                    src={user.imageUrl}
                    alt="user"
                  />
                </div>
                <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
           
                  <p className="list-text mb-0"> </p>
                  <div className="list-price">
                    <a href="#">{user.firstName} </a>
                    <a href="#">{user.lastName}</a>
                  </div>
                </div>
              </div>
            </th> 
          </tr>
        ))}
      </tbody>
    </table>
  );
}