"use client";

import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ videoId }) => {
  console.log(videoId)
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/delete_video/${parseInt(videoId)}`, {
        method: "DELETE",
      });
      router.push("/");
      router.reload();
    } catch (error) {
      console.error(error)
    }
  }

  return (
  <div>
    <div>
      <button onClick={handleClick}>
        <Trash size={32} className="text-black hover:text-emerald-500" />
      </button>
    </div>
  </div>
  );
};

export default DeleteButton;
