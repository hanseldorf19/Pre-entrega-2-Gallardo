import 'bootstrap/dist/css/bootstrap.min.css';
import { arrayProducts } from '../baseDatos/baseDatos';
import { ProductList } from '../ProductList/ProductList'
// import { categoryId } from '../Apps.js'
import { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProdListContainer = ()=> {
console.log(useParams());

  const categoryId = useParams().categoryId;
  
    const [productos, setProductos] = useState([]);
    
const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrayProducts)
        }, 2000);
    })

    useEffect(()=>{
        promesa.then((response)=>
        {
            if (categoryId){
                // vamos a filtrar por categoria
            } else {
                // vamos a ver todos los prodcutos
                setProductos(response)
            }
        }
        )
           
        },[categoryId])
    
    console.log("productos",productos);

    return(
        <div className='text-center mt-5 ml-5'>
        <h3 >Lista de Productos</h3>
        <ProductList items={productos}/>
        </div>
    )
}