"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditVideo = ({ params }) => {
  const id = params.id;
  const router = useRouter();
  const [video, setVideo] = useState({
    title: "",
    description: "",
    duration: "",
    url: "",
  });

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await fetch(`/api/video/${id}`, {
        method: "GET",
        header: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setVideo(data);
    };
    fetchVideo();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/update_video/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id, ...video})
      });
      if (response.ok) {
        const updateVideo = await response.json();
        console.log("video updated" + updateVideo)
        router.push(`/${id}`);
        router.refresh();
      } else {
        return new Response("reponse non ok", {status: 500})
      }
    } catch (error) {
      console.error("edit page" + error)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo({
      ...video,
      [name]:value
    })
  };

  return (
<div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <input
          value={video.title}
          onChange={handleChange}
          type="text"
          placeholder="Titre de la vidéo"
          className="border rounded p-2 w-full mb-4"
          name="title"
        />
        <input
          value={video.description}
          onChange={handleChange}
          type="text"
          placeholder="Description de la vidéo"
          className="border rounded p-2 w-full mb-4"
          name="description"
        />
        <input
          value={video.duration}
          onChange={handleChange}
          type="number"
          placeholder="Durée de la vidéo (en secondes)"
          className="border rounded p-2 w-full mb-4"
          name="duration"
        />
        <input
          value={video.url}
          onChange={handleChange}
          type="text"
          placeholder="URL de la vidéo"
          className="border rounded p-2 w-full mb-4"
          name="url"
        />


        <button
          type="submit"
          className="bg-emerald-500 text-white px-4 py-2 mt-4 rounded hover:bg-emerald-600"
        >
          Modifier la vidéo
        </button>
      </form>
    </div>
  );
};

export default EditVideo;
