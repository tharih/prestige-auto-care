import Link from 'next/link'
import React from 'react'
import { client, urlFor } from '../../../client'

type Props = {

}

const orderDetail = ({order}: any) => {
console.log(order);

  return (

    <>
    <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage: `url('/assets/img/breadcumb/breadcumb-bg.jpg')`,
      }}
    >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Order Details</h1>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
            <li>
                  <Link href="/">Home</Link>
                </li>
              <li>Order Details</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="as-cart-wrapper space-top space-extra-bottom">
      <div className="container">
       
        <form action="#" className="woocommerce-cart-form">
          <table className="cart_table">
            <thead>
              <tr>
                <th className="cart-col-image">Image</th>
                <th className="cart-col-productname">Item Name</th>
                {/* <th className="cart-col-productname">Order Item</th> */}
                <th className="cart-col-price">Price</th>
                <th className="cart-col-quantity">Quantity</th>
                {/* <th className="cart-col-productname">Payment</th> */}
                <th className="cart-col-productname">SKU</th>
                {/* <th className="cart-col-total">Total</th> */}
                {/* <th className="cart-col-remove">Actions</th> */}
              </tr>
            </thead>
            {order?.map((order: any, index:any) => (

            <tbody key={index}>
              <tr className="cart_item">
                <td >
                  <p className="cart-productimage" >
                    <img
                      width={91}
                      height={91}
                      src={urlFor(order?.orderItem[0].image).url()}
                      alt="Image"
                    />
                  </p>
                </td>
                
                {/* order items */}
                <td >
                  <p className="cart-productname">
                    {order?.orderItem[0].name}
                  </p>
                </td>
               
                <td >
                  <div className="quantity">
                  <p className="cart-quantity">
                    {order?.orderItem[0].price}
                  </p>
                  </div>
                </td>
                <td >
                  <div className="quantity">
                  <p className="cart-quantity">
                    {order?.orderItem[0].quantity}
                  </p>
                  </div>
                </td>

                <td >
                  <div className="quantity">
                  <p className="cart-quantity">
                    {order?.orderItem[0].sku}
                  </p>
                  </div>
                </td>


               
                
                

                

               
              </tr>
              
               
              
            </tbody>
            ))}
          </table>
        </form>
       
      </div>
    </div>
  </>
  )
}
export async function getStaticPaths() {
    const query = `*[_type == "order"]{
      _id
    }`;
    const allIds = await client.fetch(query);
    const paths = allIds.map((customerName: any) => ({
      params: {
        id: customerName._id,
      },
    }));
  
    return {
      fallback: "blocking",
      paths,
    };
  }
  
  export async function getStaticProps(context: any) {
    const id = context.params.id;
  
    const query = `*[_type == "order" && _id=="${id}"]`;
  
    const order = await client.fetch(query);
  
    return {
      props: {
        order,
      },
    };
  }

export default orderDetail