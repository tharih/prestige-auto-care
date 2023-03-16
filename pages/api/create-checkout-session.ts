import { NextRequest, NextResponse } from "next/server";

// export const stripe = require("stripe")(
//   process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
// );

interface checkoutData {
  cartItems: any;
  email: string;
}
export default async (req: NextRequest, res: NextResponse) => {
  // @ts-ignore
  const { email, cartItems } = req.body;

  const transformedItems = cartItems.map((item: any) => ({
    description: item.details,
    quantity: item.cartQuantity,
    price_data: {
      currency: "aud",
      unit_amount: item.price * 100,
      product_data: {
        name: item.name,
        images: [item.image],
      },
    },
  }));

  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ["card"],
  //   shipping_rates: ["shr_1McSGiH25kIPw05g9s6VXqgg"],
  //   shipping_address_collection: {
  //     allowed_countries: ["AU"],
  //   },
  //   line_items: transformedItems,
  //   mode: "payment",
  //   success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?success=true`,
  //   cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?canceled=true`,
  //   metadata: {
  //     email,
  //     images: JSON.stringify(cartItems.map((item: any) => item.image)),
  //   },
  // });
  // @ts-ignore
  // res.status(200).json({
  //   id: session.id,
  // });
};
