import React from "react";
import { imgBaseURL } from "../data/daseURL";

export default function MovieCard({ poster, title, rating }) {
  return (
    <div className="border-[1px] rounded-md  border-slate-50 relative group">
      <div className="relative aspect-[3/4] object-cover rounded-md overflow-hidden flex items-center">
        <div className="p-3 w-full h-12 text-right leading-loose  absolute bottom-0 text-white drop-shadow-md bg-gradient-to-b from-white/0 to-black ">
          {rating}
        </div>
        <img src={`${imgBaseURL}/${poster}`} alt="" className="" />
        <div className="absolute top-0 left-0  w-full h-full flex justify-center items-center rounded-md hover:bg-black/50  ">
          <p className="font-bold text-lg px-4 drop-shadow-md  text-white/0 group-hover:text-white">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
