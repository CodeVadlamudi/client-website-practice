import React from "react";

function CategoryTags() {
  const Tag = [
    { text: "Business" },
    { text: "Experience" },
    { text: "Technology" },
    { text: "Screen" },
    { text: "Marketing" },
    { text: "Life" },
  ];
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">All Tags</h2>
      <div className="flex flex-wrap gap-2">
        {Tag.map((tag) => (
          <p className="border text-darkBlue border-darkGrey/40 py-2 px-6 hover:bg-darkBlue hover:text-lightYellow duration-200 rounded-full font-medium">
            {tag.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default CategoryTags;
