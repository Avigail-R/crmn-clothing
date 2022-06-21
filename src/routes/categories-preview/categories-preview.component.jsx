import { Fragment } from "react";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview";
import Spinner from "../../components/spinner/spinner.component";


const CategoriesPreview = () => {

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading)
    return (

    <Fragment>
      { isLoading ? (<Spinner/>) :
        (Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (<CategoryPreview key={title} title={title} products={products} />);
        }))
      }

     </Fragment>
  );
};

export default CategoriesPreview;