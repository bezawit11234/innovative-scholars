import React from "react";
const teamMember = ({ image, name, title, expertise, bio }) => {
  return (
    <div className="relative bg-[#0C3245] text-white p-10 flex flex-col mt-7 md:flex-row items-center md:items-start  md:mt-40 shadow-lg rounded-xl">
      <img
        src={image}
        alt={name}
        className=" w-40 h-45 md:w-60 md:h-90 object-cover rounded-lg md:absolute -top-20 left-10 shadow-lg"
      />
      <div className="md:ml-64 mt-12 md:mt-0 w-full">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-gray-300 text-lg">{title}</p>

        <div className="mt-14 text-lg">
          <p className="flex items-start gap-2">
            <span className="text-red-400">📍</span>
            <span>{expertise}</span>
          </p>
          <p className="flex items-start gap-2 mt-4">
            <span className="text-red-400">📍</span>
            <span>{bio}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default teamMember;
