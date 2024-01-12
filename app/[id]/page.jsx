import DeleteButton from "../components/DeleteButton";
import Editbutton from "../components/EditButton";
import prisma from "../lib/prisma";

const Video = async ({ params }) => {
  const id = params.id;

  const video = await prisma.video.findUnique({
    where: { id: Number(id) },
  });
  if (!video) {
    return (
      <div>
        <p>Chargement en cours...</p>
      </div>
    );
  }
  return (
    <div className=" bg-gradient-to-r from-gray-500 to-gray-100 h-screen">
      <div className="relative max-w-screen-xl mx-auto opacity-80 bg-white p-10 rounded-lg shadow-lg w-full shadow-lg shadow-gray-500/50">

        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{video.title}</h1>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{video.description}</p>
        <div className="flex items-center justify-center py-16 opacity-100">
          <video src={video.url} width="850" height="450" controls />
        </div>
          <div className="absolute top-5 right-5 flex">
            <DeleteButton videoId={video.id} />
            <Editbutton videoId={video.id}/>
          </div>
      </div>
    </div>
  );
};

export default Video;
