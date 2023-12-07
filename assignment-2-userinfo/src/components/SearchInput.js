import React from "react";

export default function SearchInput({
  searchTerm,
  setSearchTerm,
  handleSearch,
}) {
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        placeholder="search item"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button
        style={{ borderRadius: 10, backgroundColor: `#61dafb`, color: "white" }}
        onClick={handleSearch}
      >
        search
      </button>
    </>
  );
}
