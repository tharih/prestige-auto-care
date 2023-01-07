import Link from "next/link";
import React, { useState } from "react";
import styles from "./Header.module.css";

type Props = {
  item: any;
};

const SideBarItems = ({ item }: Props) => {
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  // if (item && item.subMenu) {
  return (
    <>
      <li
        className="menu-item-has-children"
        onClick={() => setShowSubmenu(!showSubmenu)}
      >
        <Link href="#">{item.title} </Link>
        <ul
          className={`${styles?.subMenu} ${showSubmenu ? styles.active : ""}`}
        >
          {item.subMenu?.map((sub: any, index: number) => (
            <li key={index}>
              <Link href="#">{sub.title}</Link>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default SideBarItems;
