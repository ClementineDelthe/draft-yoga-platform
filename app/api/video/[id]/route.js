import prisma from "../../../lib/prisma"

export async function GET(request, {params}) {
  const id = params.id

  if (!id) {
    return new Response("invalid id", {status: 400})
  }

  try {
    const getVideo = await prisma.video.findUnique({
      where: {id: Number(id)}
    })
    return new Response(JSON.stringify(getVideo), {status: 200})
  } catch (error) {
    console.error("Video id route" + error)
    return new Response("video id route" + error, {status: 500})
  }
}
