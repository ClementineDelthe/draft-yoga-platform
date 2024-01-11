import prisma from "@/app/lib/prisma";

const CategoryBar = () => {
  const categories = ["Dos", "Ventre", "Tête", "Détente", "Souplesse"];
  // const categories = prisma.category.findMany()
  return (
    <div className="flex flex-row-reverse items-center justify-around">
      {categories.map((category) => (
        <div >
          <button className="rounded-lg px-4 py-2 border bg-emerald-100 hover:bg-emerald-950 hover:text-white">{category}</button>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
