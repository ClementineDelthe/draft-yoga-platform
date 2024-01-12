"use client";
import { Pen } from "lucide-react";
import Link from "next/link";


export default function Editbutton({ videoId }) {


  return (
  <div>
    <div>
      <Link href={`/edit/${videoId}`}>
        <Pen size={32} className="text-black hover:text-emerald-500" />
      </Link>
    </div>
  </div>
  );
};
