import React from "react";
import NavBar from "./NavBar";

export default function Layout({
  setMovieList,
  children,
  searchBar,
  sign,
  showSign,
}) {
  return (
    <div className="h-screen">
      <NavBar
        setMovieList={setMovieList}
        searchBar={searchBar}
        sign={sign}
        showSign={showSign}
      />
      {children}
    </div>
  );
}
