"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

import {
  Menu,
  CrossIcon,
  Cross,
  SidebarClose,
  SidebarOpen,
} from "lucide-react";
import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY;
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {open ? (
        <SidebarOpen
          className={styles.menuButton}
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        <Menu
          className={styles.menuButton}
          onClick={() => setOpen((prev) => !prev)}
        />
      )}
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink
              item={link}
              key={link.title}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
