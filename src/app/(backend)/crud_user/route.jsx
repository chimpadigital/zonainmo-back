
import { NextRequest, NextResponse } from 'next/server';
import { getAuth, clerkClient } from '@clerk/nextjs/server';
 
export async function GET(request, {params}) {
    const user = await prisma.user.findMany() 
    return NextResponse.json(user)
}
 
