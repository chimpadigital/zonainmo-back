import Link from "next/link";
import Image from "next/image";

import { clerkClient } from "@clerk/nextjs";
async function Users() {
  var users = await clerkClient.users.getUserList({
    orderBy: '-created_at'
  });
  return (
    <div>
      {users.map(user => (
        <Link href={`users/${user.id}`} key={user.id}>
          <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
            <div className="list-thumb">
              <Image
                width={94}
                height={94}
                className="w-100"
                src={user.imageUrl}
              />
            </div>
            <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
              <div className="list-price">
                <p>{user.id} </p>
              </div>
            </div>
          </div>

        </Link>
      ))}
    </div>
  );
}

export default Users;
