import React from "react";
import NavBar from "./NavBar";

export default function Layout({ setMovieList, children, searchBar, sign }) {
  return (
    <div className="h-screen">
      <NavBar
        setMovieList={setMovieList}
        searchBar={searchBar}
        sign={sign}
      />
      {children}
    </div>
  );
}
