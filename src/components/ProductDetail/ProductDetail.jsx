import './ProductDetail.css';

export const ProductDetail = ({item})=> {

    return(
        <div class="ProductContainer">
            <div className='imgContainer'>
                <img src={item.picUrl} alt={item.title}/>
            </div>
            <div className='descripContainer'>
            <h3>{item.title}</h3>
            <h5>{item.price}</h5>
            </div>
            
        </div>
    )
}