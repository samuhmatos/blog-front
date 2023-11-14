import { postCategoryService } from "@domain";
import { List } from ".";

export async function Categories() {
  const popularCategories = await postCategoryService.getPopular();

  return (
    <div>
      <h2 className="font-bold">Categorias</h2>
      <ul className="mt-4 md:mt-6 text-sm text-gray-400">
        {popularCategories.map((category, index) => {
          if (index > 4) {
            return;
          }

          return (
            <List
              name={category.name}
              postsCount={category.postsCount}
              slug={category.slug}
              key={category.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
