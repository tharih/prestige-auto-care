interface sanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Image {
  _image: "image";
  asset: Reference;
}
interface Reference {
  _ref: string;
  _type: "reference";
}
interface image_01 {
  _type: "image";
  asset: Reference;
}
interface image_02 {
  _type: "image";
  asset: Reference;
}
interface image_03 {
  _type: "image";
  asset: Reference;
}
interface choose_image {
  _type: "image";
  asset: Reference;
}

export interface AboutType extends sanityBody {
  _type: "about";
  title: string;
  description: string;
  options: Array;
  image_01: image_01;
  image_02: image_02;
  image_03: image_03;
  experienceYears: string;
  whyChooseUs: [];
  choose_image: choose_image;
}
export interface ProductType extends sanityBody {
  _type: "product";
  name: string;
  details: string;
  category: CategoryType[];
  image: Array;
  price: Number;
}
export interface CategoryType extends sanityBody {
  _type: "category";
  name: string;
}

export interface UserType extends sanityBody {
  _type: "user";
  name: string;
  password: string;
  email: string;
  isAdmin: boolean;
}

export interface OrderItemType extends sanityBody {
  _type: "orderItem";
  name: string;
  sku: string;
  quantity: number;
  image: string;
  price: number;
  Key: number;
}

export interface OrderType extends sanityBody {
  _type: "order";
  customerName: string;
  totalPrice: number;
  totalQuantity: number;
  orderItems: Array;
  IsPaid: boolean;
  IsDelivered: boolean;
  DeliveredAt: boolean;
}
