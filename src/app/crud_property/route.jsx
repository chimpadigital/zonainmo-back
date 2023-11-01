import { NextResponse } from "next/server"
import { prisma } from "@/app/libs/prisma"


export async function GET(request, { params }) {
  const task = await prisma.property.findMany() //get where params
  return NextResponse.json(task)
}

export async function POST(request, { params }) {
  try {
    const { title, description, user_id, category, price,
        lat, size, lootsize, rooms, garages, garagesize, yearbuilt, availablefrom,
      comments, youtubeVideoID, youtubeVideoUrl, fileInput }
      = await request.json() 
    const newNote = await prisma.property.create({
      data: {
        title: title,
        description: description,
        user_id: user_id,
        category: category,
        price: price, 
        lat: lat,
        size: size,
        lootsize: lootsize,
        rooms: rooms,
        garages: garages,
        garagesize: garagesize,
        yearbuilt: yearbuilt,
        availablefrom: availablefrom,
        comments: comments,
        youtubeVideoID: youtubeVideoID,
        youtubeVideoUrl: youtubeVideoUrl,
        fileInput: fileInput

      }
    });
    return NextResponse.json(newNote.id);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}