
import { NextRequest, NextResponse } from 'next/server';
import { getAuth, clerkClient } from '@clerk/nextjs/server';

export async function GET(request, {params}) {
    const task = await clerkClient.users.getUser(params.id); 
    return NextResponse.json(task)
}

// If you use `request` you don't need the type
export async function PUT(request, {params}) {
    const data = await request.json()
	const updatedUser = await clerkClient.users.updateUser(params.id, data);
    console.log(updatedUser)
	return NextResponse.json({ updatedUser });
}
 