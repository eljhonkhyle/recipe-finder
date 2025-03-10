import React from "react";
import Pasta from "../assets/italian-pasta.jpg";
import Chicken from "../assets/grilled-chicken.jpg";
import Avocado from "../assets/avocado-salad.jpg";

const Card = () => {
  const recipes = [
    {
      image: Pasta,
      title: "Delicious Pasta",
      description: "A tasty homemade pasta recipe with fresh ingredients.",
      tags: ["Italian", "Pasta"],
    },
    {
      image: Chicken,
      title: "Grilled Chicken",
      description: "Juicy grilled chicken seasoned to perfection.",
      tags: ["Healthy", "Protein"],
    },
    {
      image: Avocado,
      title: "Avocado Salad",
      description: "A refreshing salad with avocado, tomatoes, and greens.",
      tags: ["Vegan", "Fresh"],
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-5">
      <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10 place-items-center justify-items-center">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="card bg-base-100 w-full max-w-sm shadow-md h-full flex flex-col"
          >
            <figure>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body flex flex-col flex-grow">
              <h2 className="card-title">
                {recipe.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="flex-grow">{recipe.description}</p>
              <div className="card-actions justify-end">
                {recipe.tags.map((tag, idx) => (
                  <div key={idx} className="badge badge-outline">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
