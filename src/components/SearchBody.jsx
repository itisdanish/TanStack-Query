import React, { useEffect, useState } from 'react';
import './SearchBody.css';

const SearchBody = () => {
  const [searchText, setSearchText] = useState('');
  const [userData, setUserData] = useState([]);
  const [filterUser, setFilterUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await fetch('http://localhost:8080/api/users');
    const json = await data.json();
    setUserData(json);
    setFilterUser(json);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filterData = userData.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterUser(filterData);
  };

  const handleSuggestionClick = (name) => {
    setSearchText(name);
    setFilterUser([]);
  };

  return (
    <div className='search-body'>
      <h1 className='title'>Search Users</h1>

      <div className='search-container'>
        <input
          type='text'
          placeholder='🔍 Search by name...'
          value={searchText}
          onChange={handleChange}
          className='search-input'
        />

        {searchText && filterUser.length > 0 && (
          <ul className='suggestions'>
            {filterUser.map((user) => (
              <li
                key={user.id}
                className='suggestion-item'
                onClick={() => handleSuggestionClick(user.name)}
              >
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Uncomment if you want result count */}
      {/* 
      <div className="results">
        <h2>
          Total users found: <span>{filterUser.length}</span>
        </h2>
        <ul>
          {filterUser.map((user) => (
            <li key={user.id}>
              {user.name} <span>({user.age})</span>
            </li>
          ))}
        </ul>
      </div>
      */}
    </div>
  );
};

export default SearchBody;
