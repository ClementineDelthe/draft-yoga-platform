"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TestingForm = () => {
  const router = useRouter();
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    duration: "",
    url: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/post_video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videoData),
      });
      if (response.ok) {
        const newVideo = await response.json();
        console.log("nouvelle video" + newVideo);
        router.push("/");
        router.refresh();
      } else {
        console.error("erreur dans le else");
      }
    } catch (error) {
      console.log(error);
    }
    setVideoData({
      title: "",
      description: "",
      duration: "",
      url: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData({
      ...videoData,
      [name]:value
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <input
          value={videoData.title}
          onChange={handleChange}
          type="text"
          placeholder="Titre de la vidéo"
          className="border rounded p-2 w-full mb-4"
          name="title"
        />
        <input
          value={videoData.description}
          onChange={handleChange}
          type="text"
          placeholder="Description de la vidéo"
          className="border rounded p-2 w-full mb-4"
          name="description"
        />
        <input
          value={videoData.duration}
          onChange={handleChange}
          type="number"
          placeholder="Durée de la vidéo (en secondes)"
          className="border rounded p-2 w-full mb-4"
          name="duration"
        />
        <input
          value={videoData.url}
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
          Ajouter la vidéo
        </button>
      </form>
    </div>
  );
};

export default TestingForm;
