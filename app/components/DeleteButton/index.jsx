"use client";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";


export default function DeleteButton({ videoId }) {
  console.log("button" + videoId + typeof videoId)
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/delete_video/${parseInt(videoId)}`, {
        method: 'DELETE',
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error)
    }
  }

  return (
  <div>
    <div>
      <button onClick={handleClick}>
        <Trash size={24} className="text-black hover:text-emerald-500" />
      </button>
    </div>
  </div>
  );
};
