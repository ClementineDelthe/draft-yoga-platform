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
    <div>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      {typeof video.id}
      <DeleteButton videoId={video.id} />
      <Editbutton videoId={video.id}/>
    </div>
  );
};

export default Video;
