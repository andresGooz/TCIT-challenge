import React from "react";
import { Outlet, Link } from "react-router-dom";
import "@material/web/button/filled-button";
import "@material/web/icon/icon";
import 'material-icons/iconfont/material-icons.css';


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/posts/create">
              <md-filled-button>
                <md-icon class="material-icons">create</md-icon>
                Create Post
              </md-filled-button>
            </Link>
          </li>
          <li>
            <Link to="/posts">
              <md-filled-button>
                <md-icon class="material-icons">article</md-icon>
                Posts
              </md-filled-button>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
