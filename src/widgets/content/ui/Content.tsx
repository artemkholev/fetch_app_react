import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/shared/ui";

interface LayoutProps {
  children?: React.ReactNode;
}

const Content: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <aside className="sidebar">
        <h1 className="text-greenyellow">Menu</h1>
        <ul className="sidebar-panel-nav">
          <li className="m-4">
            <Link to="/" className="text-greenyellow no-underline">
              Главная
            </Link>
          </li>
          <li className="m-4">
            <Link to="/posts" className="text-greenyellow no-underline">
              Посты
            </Link>
          </li>
        </ul>
      </aside>

      <main className="content flex-1">
        <Breadcrumbs />
        {children}
      </main>
    </div>
  );
};

export default Content;
