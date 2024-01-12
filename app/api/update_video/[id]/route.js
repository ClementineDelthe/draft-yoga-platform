import prisma from "../../../lib/prisma"

export async function PUT(request, { params }) {
  const id = params.id
  const { ...video } = await request.json()

  if (!id) {
    return new Response("invalid id", { status: 400 })
  }

  try {
    const updateVideo = await prisma.video.update({
      where: { id: Number(id) },
      data: { ...video }
    })
    return new Response(JSON.stringify(updateVideo), { status: 200 })
  } catch (error) {
    console.error("Error update" + error)
    return new Response("Error udpate" + { status: 500 })
  }
}
