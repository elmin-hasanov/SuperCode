import './Shopitems.css'

type Props = {
    img: string,
    title: string,
    price: number
}
const Shopitems = (props: Props) => {
    return (
        <div className='produkte2'>
            <img src={props.img}/>
            <p>{props.title}</p>
            <p>$ {props.price}</p>
        </div>
    );
}
 
export default Shopitems;