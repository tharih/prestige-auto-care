import Link from "next/link";
import React from "react";
import { BsArrow90DegLeft } from "react-icons/bs";

const styles = {
  navBarLinkText: {
    color: "#fff",
    textDecoration: "none",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "justify-between",
    padding: "20px",
    cursor: "pointer",
  },
};

const Navbar = (props: any) => {
  return (
    <div>
      <div style={styles.navContainer}>
        <BsArrow90DegLeft
          color="white"
          style={{
            marginRight: "20px",
          }}
        />
        <Link href="/" style={styles.navBarLinkText}>
          Go to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Navbar;
