import React from "react";

function MisionVision() {
  const MisionVisionContent = [
    {
      id: 1,
      title: "Our Mision",
      heading: "Creating valuable content for creatives all around the world",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
    },
    {
      id: 2,
      title: "Our Vision",
      heading: "A platform that empowers individuals to improve",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
    },
  ];
  return (
    <div className="bg-lavender p-10 md:p-20 md:w-10/12 mx-auto lg:w-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {MisionVisionContent.map((content) => (
          <div key={content.id} className="space-y-4">
            <h3 className="tracking-[3px] uppercase font-medium">
              {content.title}
            </h3>
            <h2 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold">
              {content.heading}
            </h2>
            <p>{content.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MisionVision;
