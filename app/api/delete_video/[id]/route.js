import prisma from "../../../lib/prisma"

export async function DELETE (request, {params}) {
  const id = params.id
  if (!id) {
    return new Response("invalid id", {status: 400})
  }
  try {
    const deleteVideo = await prisma.video.delete({
      where: {id: Number(id)}
    })
    return new Response(JSON.stringify(deleteVideo), {status: 200})
  } catch (error) {
    console.error("error delete" + error)
    return new Response("error delete", {status: 500})
  }
}
