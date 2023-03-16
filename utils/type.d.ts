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
interface home_image_01 {
  _type: "image";
  asset: Reference;
}interface home_image_02 {
  _type: "image";
  asset: Reference;
}
interface choose_image {
  _type: "image";
  asset: Reference;
}
interface service_image1 {
  _type: "image";
  asset: Reference;
}
interface service_image2 {
  _type: "image";
  asset: Reference;
}
interface images {
  _type: "image";
  asset: Reference;
}
interface mainImage {
  _type: "image";
  asset: Reference;
}
interface image1 {
  _type: "image";
  asset: Reference;
}
interface image {
  _type: "image";
  asset: Reference;
}

export interface GalleryType extends sanityBody{
  _type:"gallery";
  images: images;
}

export interface ServiceType extends sanityBody{
  _type:"image";
  image: image;
}


export interface ServiceType extends sanityBody {
  _type: "service";
  name: string;
  image:image;
  details: string;
  slug:slug;
}

export interface SliderType extends sanityBody{
  _type:"slider";
  title: string;
  tagline: string;
  description: string;
  mainImage: mainImage;
}

export interface BlogType extends sanityBody{
  _type:"slider";
  image: image;
  title: string;
  small_description: string;
  description01:string;
  image1: image1;
  tag: string;
  description02: string;
  publishedAt: string;
  writtenby: string;
  slug: slug;
}

export interface AboutType extends sanityBody {
  _type: "about";
  title: string;
  home_title:string;
  description: string;
  options: Array;
  image_01: image_01;
  image_02: image_02;
  image_03: image_03;
  home_image_01: home_image_01
  home_image_02: home_image_02
  experienceYears: string;
  whyChooseUs: [];
  choose_image: choose_image;
  service_title1:string;
  service_description1:string;
  service_title2:string;
  service_description2:string;
  service_title3:string;
  service_description3:string;
  service_title4:string;
  service_description4:string;
}

export interface PaintType extends sanityBody {
  _type: "paint";
  title: string;
  description: string;
  service_title1: string;
  service_description1: string;
  service_title2: string;
  service_description2: string;
  service_title3: string;
  service_description3: string;
  service_title4: string;
  service_description4: string;
  description2: string;
  title2:string;
  process_description: string;
  process_title1: string;
  process_description1: string;
  process_title2: string;
  process_description2: string; 
  process_title3: string;
  process_description3: string;
  benefits: Array;
  service_image1: service_image1;
  service_image2: service_image2;
  customer_description: string;
}
export interface MechanicalType extends sanityBody {
  _type: "mechanical";
  title: string;
  description: string;
  service_title1: string;
  service_description1: string;
  service_title2: string;
  service_description2: string;
  service_title3: string;
  service_description3: string;
  service_title4: string;
  service_description4: string;
  description2: string;
  title2:string;
  process_description: string;
  process_title1: string;
  process_description1: string;
  process_title2: string;
  process_description2: string; 
  process_title3: string;
  process_description3: string;
  benefits: Array;
  service_image1: service_image1;
  service_image2: service_image2;
  customer_description: string;
}

export interface BannerType extends sanityBody {
  _type: "banner";
  home_title: string;
}

export interface WorkProcessType extends sanityBody {
  _type: "workProcess";
  title_1: string;
  description_1: string;
  title_2: string;
  description_2: string;
  title_3: string;
  description_3: string;
  title_4: string;
  description_4: string;
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

declare module "bcryptjs";
