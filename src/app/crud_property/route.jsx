import { NextResponse } from "next/server"
import { prisma } from "@/app/libs/prisma"


export async function GET(request, { params }) {
  const task = await prisma.property.findMany() //get where params
  return NextResponse.json(task)
}

export async function POST(request, { params }) {
  try {
    const { title, description, user_id, category, price,
        lat, lng, size, lootsize, rooms, garages, garagesize, yearbuilt, availablefrom,
      comments, youtubeVideoID, youtubeVideoUrl, fileInput, addressMap,ammenities0, ammenities1,ammenities2,ammenities3,ammenities4,ammenities5 }
      = await request.json() 
    const newNote = await prisma.property.create({
      data: {
        title: title,
        description: description,
        user_id: user_id,
        category: category,
        price: price, 
        lat: lat,
        lng: lng,
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
        fileInput: fileInput,
        addressMap: addressMap,
        ammenities0: ammenities0,
        ammenities1: ammenities1,
        ammenities2: ammenities2,
        ammenities3: ammenities3,
        ammenities4: ammenities4,
        ammenities5: ammenities5
      }
    });
    console.log(newNote)
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