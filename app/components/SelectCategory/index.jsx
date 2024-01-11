import prisma from "@/app/lib/prisma";

const SelectCategory = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div>
      <select>
        {categories.map((category) => (
          <option key={category.name}>{category.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
