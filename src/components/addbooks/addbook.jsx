import React, { useState } from "react";
import initialList from "../bookslist";
import 'boxicons'
import "./addbook.css";

const Addbook = () => {
  const [list, setList] = React.useState(initialList);

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  const filterPosts = (posts, query) => {
    // qurey search
    if (!query) {
      return posts;
    }
    return posts.filter((post) => {
      return Object.values(post)
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  };
  const filteredPosts = filterPosts(list, query);
  // console.log(filteredPosts);

  var bookValue, authorValue, dateValue, subjectValue;
  const gettitleValue = (event) => {
    bookValue = event.target.value;
  };
  const getauthorValue = (event) => {
    authorValue = event.target.value;
  };
  const getsubjectValue = (event) => {
    dateValue = event.target.value;
  };
  const getdateValue = (event) => {
    subjectValue = event.target.value;
  };

  // button function
  function handleAdd() {
    const newList = list.concat({
      title: bookValue,
      author: authorValue,
      date: dateValue,
      subject: subjectValue,
    });
    setList(newList);
  }

  function handleRemove(id) {
    const newList = filteredPosts.filter((item) => item.id !== id);
    console.log(newList);
    setList(newList);
  }

  return (
    <div>
      <div className="maincontent">
        <h1>Enter Book Details</h1>
        <input
          className="title"
          placeholder="Enter Book Title"
          onChange={gettitleValue}
        />
        <input placeholder="Enter Book Author" onChange={getauthorValue} />
        <input placeholder="Enter Book Subject" onChange={getsubjectValue} />
        <input placeholder="Enter Book Publish Date" onChange={getdateValue} />
        <button className="btn" onClick={handleAdd}>
          Add
        </button>
      </div>

      <form action="/" method="get" className="search_bar">
        <label htmlFor="header-search">
          <span className="visually-hidden">Add Filter</span>
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

      <div className="list" onRemove={handleRemove}>
        <table>
          <thead>
            <tr>
              <th>Title({filteredPosts.length})</th>
              <th>Author</th>
              <th>Subject</th>
              <th>Publish Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((data) => {
              return (
                <tr className="book-list">
                  <td className="td_2">{data.title}</td>
                  <td className="td_2">{data.author}</td>
                  <td className="td_2">{data.subject}</td>
                  <td className="td_2">{data.date}</td>
                  <td type="button" onClick={() => handleRemove(data.id)}><box-icon name='trash'></box-icon></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Addbook;
