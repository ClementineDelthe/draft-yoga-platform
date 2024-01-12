import prisma from "../../lib/prisma"
import { NextResponse } from "next/server"

export async function POST(request) {

  const res = await request.json()
  const {title, description, url, duration} = res

  const result = await prisma.video.create({
    data: {
      title,
      description,
      url,
      duration
    }
  })
  return NextResponse.json({ result })


}

// import prisma from "@/app/lib/prisma";

// export async function POST(request) {
//   const { title, description, url, duration, categoryIds } = await request.json();

//   try {
//     const result = await prisma.video.create({
//       data: {
//         title,
//         description,
//         url,
//         duration,
//         categories: {
//           connect: categoryIds.map(categoryId => ({ id: categoryId })),
//         },
//       },
//     });

//     return {
//       status: 200,
//       body: JSON.stringify({ success: true, result }),
//     };
//   } catch (error) {
//     return {
//       status: 500,
//       body: JSON.stringify({ success: false, error: 'Internal Server Error' }),
//     };
//   }
// }
