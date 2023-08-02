"use client";
import { useState } from "react";
import { SearchManufacturer } from "./";
import { features } from "node:process";
import { afterEach } from "node:test";
import React from "react";
import { manufacturers } from "./../constants/index";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
