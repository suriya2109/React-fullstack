import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "../useUser";
const NavBarComponent = () => {
  const { user, loading } = useUser();
  const navigator = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-brand">My App</div>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/articles">Articles</Link>
        </li>
        {loading ? (
          <li className="nav-item">Loading...</li>
        ) : (
          <>
          {user && (
            <li style={{ color: "white" }}>
              <span>Welcome, {user.email}</span>
            </li>
            )}

            <li className="nav-item">
              {user ? (
                <button onClick={() => signOut(getAuth())}>SignOut</button>
              ) : (
                <button onClick={() => navigator("/login")}>SignIn</button>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBarComponent;
