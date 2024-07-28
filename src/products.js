
import {useState , useEffect} from 'react';

import Display_Products from './display_products';

import './products.css'


function Products()
{

    const [product , updateProduct] = useState([]);

    useEffect( ()=>{ getData() } , [product] );


    async function getData()
    {
        let x =await fetch("https://fakestoreapi.com/products");

        x  =await x.json()

        updateProduct(x);
    }


    if(product.length === 0)
    {
        return <h1>Loading........</h1>
    }

    // console.log(product);

    return(

        <div className='parent'>

            {product.map((ele)=>{return(
                
            <div className='child' key={ele.id}>

                <Display_Products {...ele} ></Display_Products>

            </div>
            )
                
            })}
        </div>

    )

}

export default Products;