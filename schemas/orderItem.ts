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
      name: "quantity",
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
  ],
};
