import Link from "next/link";
import React, { useEffect, useState } from "react";
import About from "../pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import stylesLayout from "./Layout.module.css";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { addUser } from "../store/reducers/userReducer";
type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  const dispatch = useDispatch();
  const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);
  const scrollTop = () => {
    if (window.scrollY > 100) {
      setShowScrollBtn(true);
    } else {
      setShowScrollBtn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollTop);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const email = user?.email;
        const docRef = doc(db, "users", `${email}`);
        const usersDoc = await getDoc(docRef);

        dispatch(
          addUser({
            email: user.email,
            uid: user.uid,
            role: usersDoc.data()?.role,
          })
        );
      } else {
      }
    });
  }, []);

  return (
    <>
      <Header />

      {children}
      <Footer />
      <Link
        href="#"
        className={`${stylesLayout.scrollToTop} active  scroll-btn ${
          showScrollBtn ? stylesLayout.show : ""
        }`}
      >
        <i className="fa fa-angle-up" />
      </Link>
    </>
  );
};

export default Layout;
