import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  clearCart,
  getCartTotal,
  selectCartAll,
  selectCartItems,
} from "../store/reducers/cartReducer";
import { selectUser } from "../store/reducers/userReducer";
import { runFireWorks } from "../utils/canvasConfetti";
import style from "./styles/success.module.css";

const Success = () => {
  const cartItems = useSelector(selectCartItems);
  const { cartTotalAmount, cartTotalQuantity } = useSelector(selectCartAll);
  const user = useSelector(selectUser);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
    runFireWorks();

    if (
      cartTotalAmount !== 0 &&
      cartTotalQuantity !== 0 &&
      cartItems !== null
    ) {
      handleCreateOrder();
    }
  }, [cartTotalAmount, cartTotalQuantity]);

  const handleCreateOrder = async () => {
    const formData = {
      orderItem: cartItems,
      customerName: user?.name,
      totalPrice: cartTotalAmount,
      totalQuantity: cartTotalQuantity,
      IsPaid: true,
      IsDelivered: false,
      DeliveredAt: new Date().toISOString(),
    };

    const productUpdateData = cartItems.map((value: any) => {
      return {
        _id: value._key,
        quantity: value.qty - value.cartQuantity,
      };
    });

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/order/`,
      {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const json = result.json();

    if (result) {
      productUpdateData.map(async (value: any) => {
        const resultOrder = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/update-products/`,
          {
            body: JSON.stringify(value),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const jsonResult = resultOrder.json();
      });
    }
    dispatch(clearCart());
    toast.success(`Order Placed Successfully`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "dark",
    });
    router.push("/Shop");
    return json;
  };

  return (
    <div className={style.success_wrapper}>
      <div className={style.success}>
        <p className="">
          <BsBagCheckFill size={48} className={style.icon} />
        </p>
        <h2>Thank you for your order!</h2>
        <span className={style.email_message}>
          Check your email inbox for the receipt.{" "}
        </span>
        <span className={style.description}>
          If you have any questions, please email
          <Link
            className={style.email}
            href={"mailto:rediantsparktechnology@gmail.com"}
          >
            rediantsparktechnology@gmail.com
          </Link>
        </span>
        <Link href="/">
          <button type="button" className="as-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
