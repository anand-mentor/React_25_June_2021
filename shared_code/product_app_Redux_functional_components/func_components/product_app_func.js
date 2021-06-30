import ProductFormFunc from './product_form_func';
import ProductTableFunc from './product_table_func';
import {useState} from 'react';
import EditProductFormFunc from './edit_product_func';
import { useSelector, useDispatch } from 'react-redux';

const ProductAppFunc = (props)=>{

    let products = useSelector((state)=> state.products);
    let renderForm = useSelector((state)=> state.renderForm);
    let selected_product = useSelector((state)=> state.selectedProduct);
    console.log('ProductAppFunc called');
    //const [products, setProducts] = useState([]);
    //const [renderForm, setRenderForm] = useState('ADD_PRODUCT');
    //const [selected_product, setSelectedProduct] = useState({});
/*
    const addProduct = (product)=> {
        product.id = products.length + 1;
        products.push(product);
        let copyOfProducts = [...products];
        setProducts(copyOfProducts);
        setRenderForm('ADD_PRODUCT');
    }
    
    const renderAddProductForm = (product) => {
        setRenderForm('ADD_PRODUCT');
    }
*/    
/*
    const renderEditProductForm = (product) => {
        setRenderForm('EDIT_PRODUCT');
        setSelectedProduct(product);
    }
    const removeProductFromList = (index) => {
        products.splice(index, 1);
        let productListCopy = [...products];
        setProducts(productListCopy);
    }
*/

    if (renderForm === 'ADD_PRODUCT')  {
        return <div>
        <h1><center>Product Application</center></h1>
        <ProductFormFunc/>
        <br></br>
        <ProductTableFunc products={products}  
            ></ProductTableFunc>
        </div>
    }
    else if (renderForm === 'EDIT_PRODUCT')  {
        return <div>
            <EditProductFormFunc product={selected_product} />
        </div>
    }
}

export default ProductAppFunc;
