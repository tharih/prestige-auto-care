import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { AboutType, CategoryType, ProductType } from "../utils/type";

interface contextProps {
  products: [];
  category: CategoryType[];
  about: AboutType[];
  setProducts: Dispatch<SetStateAction<[]>>;
}

interface stateProps {
  products: [];
  setProducts: Dispatch<SetStateAction<[]>>;
}

// @ts-ignore
const DataContext = createContext();

export const DataProvider = ({ children }: any) => {
  const [productsArr, setProductsArr] = useState<[]>([]);
  const [aboutArr, setAboutArr] = useState([]);

  return (
    <DataContext.Provider
      value={{ productsArr, setProductsArr, aboutArr, setAboutArr }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
