import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="rounded-2xl shadow-lg p-4 bg-white max-w-sm">
      {imageUrl && <img src={imageUrl} alt={title} className="rounded-xl mb-4" />}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Card;
