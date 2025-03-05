import img5 from '../../assets/img/45-Home_hem.png'
import img6 from '../../assets/img/46-Home_bm.png'
import Shopitems2 from '../Shopitems2/Shopitems2'
type produkst = {
    img: string,
    title: string,
    price: number,
}

const produktList: produkst[] = [
    {
        img: img5,
        title: "Summer Print by BlaBla",
        price: 27.00,
    },
    {
        img: img6,
        title: "Paolo Modular Coner Sofa",
        price: 174.00,
    }
]

const Shoplist2 = () => {
    return (
        <div className='shopliste'>
        {produktList.map((artikel) => <Shopitems2
        img={artikel.img}
        title={artikel.title}
        price={artikel.price}
        />)}
        </div>
    );
}

export default Shoplist2;