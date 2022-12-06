import React from "react";

const Search = () => {
  

  return (
    <div>
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="s"
          onKeyUp={filterPosts}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
