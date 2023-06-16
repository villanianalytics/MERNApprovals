import React, { useEffect, useState } from "react";
import axios from "axios";

function Editor() {
  const [posts, setPosts] = React.useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [company, setCompany] = useState("");

  const fetchData = async function () {
    try {
      const data = await axios.post(`http://localhost:3002/post/getall`, {});
      console.log("data", data.data.posts);
      setPosts(data.data.posts);
    } catch (e) {
      console.log("e", e);
      setPosts([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`http://localhost:3002/post/add`, {
        id,
        title,
        company,
        client,
      });

      console.log("data", data);
      if (data.data.type == "success") {
        alert("Successfully submitted!");
        fetchData();
      }
    } catch (e) {
      console.log("e", e);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="pt-24 bg-white">
      <div className="px-12 mx-auto">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span>All Posts</span>
          </h1>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Post Name</th>
              <th>Company</th>
              <th>Client</th>
              <th>State</th>
              <th>Scheduled</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, i) => (
              <tr key={i}>
                <td>{post.title}</td>
                <td>{post.company}</td>
                <td>{post.client}</td>
                <td>{post.state}</td>
                <td>{post.schedule == "" ? "N" : post.schedule}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="container form">
          <form action="/">
            <div className="form-group">
              <label for="email">Title:</label>
              <input
                type="string"
                className="form-control"
                id="title"
                placeholder="Enter title"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label for="post">Company:</label>
              <textarea
                rows="5"
                className="form-control"
                id="company"
                placeholder="Enter company"
                name="company"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label for="hashtags">Client:</label>
              <input
                type="string"
                className="form-control"
                id="client"
                placeholder="Enter client"
                name="client"
                value={client}
                onChange={(e) => {
                  setClient(e.target.value);
                }}
              />
            </div>
            <div className="btn-group">
              <button className="btn btn-default" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Editor;
