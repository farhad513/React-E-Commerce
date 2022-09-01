import shoe from '../../images/flash/shoes.jpg';
import bag from '../../images/cover/bag.png';
import hand from '../../images/flash/fashion-hand.png';
import mobile from '../../images/flash/mobile.jpg';
import Swatch from '../../images/flash/smart-watch.jpg';
import watch from '../../images/flash/watch.jpg';

const Data = {
    productItems: [
        {
            id: 1,
            title: "shoes",
            discount: 50,
            price: 100,
            cover: shoe
        },
        {
            id: 2,
            title: "bag",
            discount: 40,
            price: 80,
            cover: bag
        },
        {
            id: 3,
            title: "fashion handbag",
            discount: 30,
            price: 60,
            cover: hand
        },
        {
            id: 4,
            title: "mobile",
            discount: 50,
            price: 100,
            cover: mobile
        },
        {
            id: 5,
            title: "Smart watch",
            discount: 20,
            price: 40,
            cover: Swatch
        },
        {
            id: 6,
            title: "watch",
            discount: 60,
            price: 120,
            cover: watch
        }
    ]
}



export default Data;