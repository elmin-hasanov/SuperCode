import './Item.css'
type ShopitemsProps = {
    titlePizza: string;
    PricePizza: number;
    imagePizza: string;
    stocks: number;
}

const Item = (props: ShopitemsProps) => {    
  return (
    <div className='item'>
      <h2>{props.titlePizza}</h2>
      <p>{props.PricePizza} Euro</p>
      <img src={props.imagePizza}></img>
      <p>{props.stocks}</p>
    </div>
  )
}

export default Item
