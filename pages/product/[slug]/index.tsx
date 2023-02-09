type Props = {
  params: {
    slug: string;
  };
};

const Product = ({ params }: Props) => {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
};

export default Product;
