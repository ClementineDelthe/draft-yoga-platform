import prisma from "@/app/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";



const DisplayVideo = async () => {
 noStore()
 const videos = await prisma.video.findMany()
 console.log(videos[1])
  return (
    <div>
      <p>COUCOU TOP</p>
      { videos.map((video) => (
        <div key={video.id}>
          <h1>{ video.title }</h1>
          <p>{video.description}</p>

        </div>
      )) }
      <p>COUCOU END</p>
    </div>
  )
}

export default DisplayVideo
