import React, { useEffect, useState } from "react";
import axios from "axios";

function Teammember() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [hashtags, setHashTags] = useState("");
  const [comments, setComments] = useState("");
  const [notes, setNotes] = useState("");
  const [schedule, setSchedule] = useState("");

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

  const onSave = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `http://localhost:3002/post/update/customer`,
        {
          id,
          title,
          post,
          hashtags,
          comments,
          notes,
          mode: 0,
        }
      );
      console.log("data", data);
      if (data.data.type == "success") {
        alert("Successfully saved!");
        fetchData();
      }
    } catch (e) {
      console.log("e", e);
      alert("Something went wrong!");
    }
  };

  const onPublish = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `http://localhost:3002/post/update/publish`,
        {
          id,
          title,
          post,
          hashtags,
          comments,
          notes,
          mode: 1,
        }
      );
      console.log("data", data);
      if (data.data.type == "success") {
        alert("Successfully published!");
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
            <span>Scheduled Posts Calendar View</span>
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
            {posts.map((post, i) => {
              if (post.state == "Scheduled") {
                return (
                  <tr
                    onClick={() => {
                      setId(post.id);
                      setTitle(post.title);
                      setPost(post.post);
                      setHashTags(post.hashtags);
                      setComments(post.comments);
                      setNotes(post.notes);
                    }}
                    key={i}
                  >
                    <td>{post.title}</td>
                    <td>{post.company}</td>
                    <td>{post.client}</td>
                    <td>{post.state}</td>
                    <td>{post.schedule == "" ? "N" : post.schedule}</td>
                  </tr>
                );
              }
            })}
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
              <label for="post">Post:</label>
              <textarea
                rows="5"
                className="form-control"
                id="post"
                placeholder="Enter post"
                name="post"
                value={post}
                onChange={(e) => {
                  setPost(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label for="hashtags">Hash tags:</label>
              <input
                type="string"
                className="form-control"
                id="hashtags"
                placeholder="Enter hash tags"
                name="hashtags"
                value={hashtags}
                onChange={(e) => {
                  setHashTags(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label for="comments">Comments:</label>
              <textarea
                rows="2"
                className="form-control"
                id="comments"
                placeholder="Enter comments"
                name="comments"
                value={comments}
                onChange={(e) => {
                  setComments(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label for="notes">Notes:</label>
              <textarea
                rows="2"
                className="form-control"
                id="notes"
                placeholder="Enter notes"
                name="notes"
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />
            </div>
            <div className="btn-group">
              <button className="btn btn-default" onClick={onSave}>
                Save
              </button>
              <button className="btn btn-default" onClick={onPublish}>
                Schedule
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Teammember;
