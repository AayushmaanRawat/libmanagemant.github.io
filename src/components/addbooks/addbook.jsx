import React from "react";
import initialList from "../bookslist";
// import Search from "../search.js";
import "./addbook.css";
const Addbook = () => {
  const [list, setList] = React.useState(initialList);

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  const filterPosts = (post, query) => {
    if (!query) {
      return post;
    }

    return post.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };

  const filteredPosts = filterPosts(list, query);

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
  // const add=()=>{
  //   List.push({title:bookValue,author:authorValue,date:dateValue,subject:subjectValue});
  //   console.log(List);
  // }

  function handleAdd() {
    const newList = list.concat({
      title: bookValue,
      author: authorValue,
      date: dateValue,
      subject: subjectValue,
    });
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

      <div className="list">
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
                <tr key={data.key}>
                  {console.log(data)}
                  <td className="td_2">{data.title}</td>
                  <td className="td_2">{data.author}</td>
                  <td className="td_2">{data.subject}</td>
                  <td className="td_2">{data.date}</td>
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