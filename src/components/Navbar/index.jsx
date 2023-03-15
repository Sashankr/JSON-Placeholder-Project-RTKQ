import React from "react";
import globalStyles from "@/styles/Home.module.css";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={globalStyles.container}>
        <nav>
          <ul>
            <li>Home</li>
            <li>Create Post</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
