import React, { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export default function SearchHistory() {
  const [pastSearches, setPastSearches] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    const storedSearches = localStorage.getItem("pastSearches");
    if (storedSearches) {
      setPastSearches(JSON.parse(storedSearches));
    }
  }, []);

  return (
    <div>
      <button
        onClick={() => Navigate("/")}
        style={{ backgroundColor: "gold", borderRadius: 10 }}
      >
        go Back
      </button>
      {pastSearches.length === 0 ? (
        <h1>No search history</h1>
      ) : (
        <>
          <h1>Search History</h1>
          {pastSearches.map((pastSearch, i) => (
            <div
              key={i}
              style={{ backgroundColor: "#61dafb", borderRadius: 10 }}
            >
              <h5 style={{ padding: 5 }}>{pastSearch}</h5>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
