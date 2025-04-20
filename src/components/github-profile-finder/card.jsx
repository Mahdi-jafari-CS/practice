export default function User({ user }) {
  const {
    avatar_url,
    name,
    login,
    followers,
    following,
    public_repos,
    created_at,
  } = user;
  const date = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="user" className="avatar" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on 
          {`    ${date.getDate()} ${date.toLocaleString("en-us", {
            month: "short",
          })} ${date.getFullYear()}`}
        </p>
      </div>
      <div>
        <div><p>public repos</p> <p>{public_repos}</p></div>
        <div><p>Followers</p> <p>{followers}</p></div>
        <div><p>Following</p> <p>{following}</p></div>
       
      </div>
    </div>
  );
}
