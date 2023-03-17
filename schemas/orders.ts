export default {
  name: "orders",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "totalPrice",
      title: "Price",
      type: "number",
    },
    {
      name: "totalQuantity",
      title: "Total Quantity",
      type: "number",
    },
    {
      name: "orderItem",
      title: "Order Item",
      type: "array",
      of: [
        {
          title: "Order Item",
          type: "orderItem",
        },
      ],
    },
    {
      name: "IsPaid",
      title: "Is Paid",
      type: "boolean",
    },
    {
      name: "IsDelivered",
      title: "Is Delivered",
      type: "boolean",
    },
    {
      name: "DeliveredAt",
      title: "Delivered At",
      type: "datetime",
    },
  ],
};
