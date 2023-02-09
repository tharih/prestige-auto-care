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

export interface AboutType extends sanityBody {
  title: string;
  description: string;
  options: Array;
  image_01: image_01;
  image_02: image_02;
  image_03: image_03;
  experienceYears: string;
}
