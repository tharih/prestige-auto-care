import React from "react";

type IProps = {
  productPerPage: number;
  totalProducts: number;
  handlePrevious?: () => void;
  handleNext?: () => void;
  paginate: any;
  currentPage: number;
};
const Pagination = ({
  productPerPage,
  totalProducts,
  handlePrevious,
  handleNext,
  paginate,
  currentPage,
}: IProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="as-pagination text-center pt-50">
      <ul>
        <li
          style={{
            visibility: currentPage !== 1 ? "visible" : "hidden",
          }}
        >
          <span onClick={handlePrevious}>
            <i className="fa fa-arrow-left" />
          </span>
        </li>
        {pageNumbers?.map((val: any) => (
          <li key={val} onClick={() => paginate(val)}>
            <span>{val}</span>
          </li>
        ))}

        <li>
          <span onClick={handleNext}>
            <i className="fa fa-arrow-right" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
