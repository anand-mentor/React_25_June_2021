const AddProduct = (productList, new_product) => {
    productList.push(new_product);
    console.log('New product list: ', productList);
    return {
        type: 'ADD_PRODUCT',
        payload: [...productList]
    }
}

export default AddProduct;