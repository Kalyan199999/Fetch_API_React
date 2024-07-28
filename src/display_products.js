
import './display_products.css'

function Display_Products(products) {
    
    let id = products.id;

    return(
        <div className='container'  key={products.id}>

            <img src={products.image} alt='products'/>
            
            <p>{products.title}</p>
            
            <p><span>Price:</span>$.{products.price}</p>
            
            <p> <span>Category:</span> {products.category}</p>
        </div>
    );
}

export default Display_Products;