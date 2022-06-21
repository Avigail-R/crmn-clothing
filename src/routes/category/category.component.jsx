import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import ProductCard from '../../product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLOading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            { isLOading ? (<Spinner/>) :(<div className='category-container'>
            {products && products.map((product) =>
                (<ProductCard key={product.id} product={product} />))}
            </div>) }

        </Fragment>
    )

}
export default Category;