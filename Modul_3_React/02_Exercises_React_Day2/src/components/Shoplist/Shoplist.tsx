import './Shoplist.css'
import img from '../../assets/img/01-Books.png'
import img2 from '../../assets/img/01-Home.png'
import img3 from '../../assets/img/02-Lifestyle.png'
import img4 from '../../assets/img/29-Lifestyle_b-o.png'
import Shopitems from '../Shopitems/Shopitems'

type produkst = {
    img: string,
    title: string,
    price: number,
}

const produktList: produkst[] = [
    {
        img: img2,
        title: "Vifa Speaker",
        price: 799.00,
    },
    {
        img: img4,
        title: "Bang & Olufsen Headphones",
        price: 174.00,
    },
    {
        img: img,
        title: "Poketo Book",
        price: 25.00,
    },
    {
        img: img3,
        title: "Ucon Acrobatic Backpack",
        price: 79.00,
    },
]

const Shoplist = () => {
    return (
        <div className='shopliste'>
        {produktList.map((artikel) => <Shopitems
        img={artikel.img}
        title={artikel.title}
        price={artikel.price}
        />)}
        </div>
        
    );
}

export default Shoplist;