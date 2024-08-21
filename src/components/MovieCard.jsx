import React from "react";
import {imgBaseURL} from "../data/daseURL.json";

export default function MovieCard({ poster, title, rating }) {
  return (
    <div>
      <div className="relative aspect-[3/4] object-cover rounded-md overflow-hidden flex items-center">
        <img src={`${imgBaseURL}/${poster}`} alt="" className="" />
        <div className="p-3 w-full h-12 text-right leading-loose  absolute bottom-0 text-white drop-shadow-md bg-gradient-to-b from-white/0 to-black">
          {rating}
        </div>
      </div>
      <p className="font-bold text-lg">{title}</p>
    </div>
  );
}
