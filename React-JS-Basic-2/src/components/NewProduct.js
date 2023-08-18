import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props) {

    function saveProduct(product){
        console.log("i am inside new-product");
        console.log(product);

        //calling parebt function
        props.harshal(product);

    }
return (<div className='new-product'>
        <ProductForm onsaveProduct = {saveProduct}/>
    </div>)
}

export default NewProduct;