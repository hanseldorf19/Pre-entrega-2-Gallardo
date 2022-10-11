import { useParams } from "react-router-dom";


export const ProductDetail = ()=>{
    const productId = useParams().id;
    
    return(
        <div>
            <p>Detalle Prodcuto</p>

        </div>
    )
}