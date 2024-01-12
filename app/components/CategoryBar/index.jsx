'use client'
import prisma from "@/app/lib/prisma";
import { useState } from "react";

const CategoryBar = () => {
  const categories = ["Dos", "Ventre", "Tête", "Détente", "Souplesse"];
  // const categories = prisma.category.findMany()
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  return (
    // <div className="flex flex-row-reverse items-center justify-around">
    <div
      className={`bg-gray-100 h-screen fixed left-0 p-4 flex flex-col items-center justify-around ${
        isHovered ? 'opacity-100' : 'opacity-25'
      } transition-width duration-300 ease-in-out`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {categories.map((category) => (
        <div>
          <button key={category} className="rounded-lg px-4 py-2 border bg-emerald-100 hover:bg-emerald-950 hover:text-white">
            {category}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
