import Link from "next/link";
import React, { useState } from "react";
import styles from "./Header.module.css";

type Props = {
  item: any;
};

const SideBarItems = ({ item }: Props) => {
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  if (item.subMenu) {
    return (
      <>
        <li
          className="menu-item-has-children"
          onClick={() => setShowSubmenu(!showSubmenu)}
        >
          <a href="#">{item.title}</a>
          <ul
            className={`${styles.subMenu} ${showSubmenu ? styles.active : ""}`}
          >
            {item.subMenu.map((sub: any, index: number) => (
              <li key={index}>
                <Link href="#">{sub.title}</Link>
              </li>
            ))}
          </ul>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className="menu-item-has-children">
          <Link href="index.html">Home</Link>
        </li>
        <li>
          <Link href="about.html">About</Link>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </>
    );
  }
};

export default SideBarItems;
