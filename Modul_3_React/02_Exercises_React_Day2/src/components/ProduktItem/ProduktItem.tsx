// css import
import './ProduktItem.css'

type props = {
    images: string,
    name: string,
    price: number
}
const ProduktList = (props: props) => {
    return ( 
        <div className='produkte'>
            <img src={props.images}/>
            <p>{props.name}</p>
            <p>$ {props.price}</p>
            <button>BUY NOW</button>
        </div>
     );
}
 
export default ProduktList;