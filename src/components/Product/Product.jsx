import './product.css'
export const product = ()=>{
return(
    <div className="ProductCard">
        <img src={product.picUrl} alt={product.picUrl}></img>
        <h4>{product.title}</h4>
        <h5>{product.price}</h5>
        <button>Comprar</button>
        <button>Ver Detalles</button>
    </div>
)

}