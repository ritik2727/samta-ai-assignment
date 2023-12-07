import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterUsers, setFilterUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [pastSearches, setPastSearches] = useState([]);
  const navigate = useNavigate();

  // fetch users data from the api
  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      setFilterUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch past search item history from the local Storage
  useEffect(() => {
    fetchUsers();
    const storedSearches = localStorage.getItem("pastSearches");
    if (storedSearches) {
      setPastSearches(JSON.parse(storedSearches));
    }
  }, []);

  // search handler
  // it will filter item from the users data
  // update past search item history
  const handleSearch = () => {
    if (searchTerm.length > 0) {
      const data = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterUsers(data);
      const newPastSearches = [searchTerm, ...pastSearches];
      setPastSearches(newPastSearches);
      localStorage.setItem("pastSearches", JSON.stringify(newPastSearches));
    }
  };

  // sort user by name
  const sortUsers = () => {
    const sortedUsers = [...filterUsers].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    setFilterUsers(sortedUsers);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    sortUsers();
  };

  return (
    <div>
      <div className="input-container">
        <div>
          {" "}
          <select
            id="sort"
            value={sortOrder}
            onChange={handleSortChange}
            style={{ borderRadius: 10 }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div>
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
        </div>
        <div>
          <button
            onClick={() => navigate("/searchHistory")}
            style={{ backgroundColor: "gold", padding: 5, borderRadius: 10 }}
          >
            View search history
          </button>
        </div>
      </div>
      <UserCard users={filterUsers} />
    </div>
  );
}
