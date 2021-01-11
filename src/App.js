import React, {useState, useEffect} from "react"
import axios from "axios";
import ReactPaginate from "react-paginate"
import Posts from "./components/Posts";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(res.data)
      setLoading(false)
    };
    fetchData();
  }, [])

  const handlePageClick = (selected) => {
    setCurrentPage(selected + 1)
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const offset = currentPage * postsPerPage
  const pageCount = Math.ceil(posts.length / postsPerPage)

  return (
    <div className="App">
      <h1>Post Data</h1>
      <Posts posts={currentPosts} loading={loading} />
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        onPageChange={(data) => handlePageClick(data.selected)}
        containerClassName={"pagination"}
      />
    </div>
  );
}

export default App;
