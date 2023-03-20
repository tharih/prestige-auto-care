export default {
  name: "orderItem",
  title: "Order Item",
  type: "object",
  initialValue: {
    isHighlighted: false,
  },
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "sku",
      title: "SKU",
      type: "string",
    },
    {
      name: "qty",
      title: "Quantity",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "string",
    },
    {
      name: "price",
      title: "price",
      type: "number",
    },
    {
      name: "cartQuantity",
      title: "Cart Quantity",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
  ],
};
