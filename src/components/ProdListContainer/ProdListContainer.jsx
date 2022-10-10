import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProdListContainer = ()=> {
console.log(useParams());
  const {categoryId} = useParams();
  
    const [productos, setProductos] = useState([]);
    

const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrayProducts)
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if (categoryId) {
                const productosFiltrados = resultado.filter(elm.categoria === categoryId) 
                setProducts(productosFiltrados)
            } else {
                setProducts(resultado)
            }
           
        })
    },[categoryId])

    return(
        <div className='text-center mt-5 ml-5'>
        <h3 >Lista de Productos</h3>
        </div>
    )
}