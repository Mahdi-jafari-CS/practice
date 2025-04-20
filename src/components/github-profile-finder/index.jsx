import { useEffect, useState } from "react";
import User from "./card";
import "./styles.css";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("Mahdi-jafari-CS");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubUserData();
    setLoading(true);
  }
  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
    console.log(data);
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);
  if (loading) {
    <h1>Loading data...</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Search Github UserName..."
        />
        <button type="submit" onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
