import prisma from "@/app/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";
import DeleteButton from "../DeleteButton";
import Link from "next/link";

const DisplayVideo = async () => {
  noStore();
  const videos = await prisma.video.findMany();
  return (
    <div className="ml-64 p-4">
      <div className="grid lg:grid-cols-3 place-items-center mt-24">
        {videos.map((video) => (
          <Link key={video.id} href={`/${video.id}`}>
            <div key={video.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-gray-300 dark:border-gray-700 relative m-2">
              <div className="p-5">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{video.title}</h1>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{video.description}</p>
              </div>
              <div className="p-2">
                <video src={video.url} width="350" height="150" controls />
              </div>
              <div className="absolute top-2 right-2">
                <DeleteButton videoId={video.id}/>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DisplayVideo;
