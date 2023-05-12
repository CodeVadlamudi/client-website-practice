import React from "react";
import CategoryCards from "./CategoryCards";
import CategoryLists from "./CategoryLists";
import CategoryTags from "./CategoryTags";

function CategroySection() {
  return (
    <section className="max-w-7xl mx-auto my-20 px-10 xl:px-0">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-8/12">
          <CategoryCards />
          <CategoryCards />
          <CategoryCards />
          <CategoryCards />
        </div>

        <div className="lg:w-4/12 space-y-4">
          <CategoryLists />
          <CategoryTags />
        </div>
      </div>
    </section>
  );
}

export default CategroySection;
