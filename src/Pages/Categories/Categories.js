import React from 'react';
import './Categories.css';
import cat1 from '../../images/fashion.webp';
import car from '../../images/cars.png';
import homegarden from '../../images/home.png';
import music from '../../images/music.png';
import pet from '../../images/pets.png';
import baby from '../../images/baby.png';
import book from '../../images/book.png';
import ele from '../../images/ele.png';

const Categories = () => {
    const data = [
        {
            catImg: cat1,
            catName: "Fashion"
        },
        {
            catImg: ele,
            catName: "electronic"
        },
        {
            catImg: car,
            catName: "cars"
        },
        {
            catImg: homegarden,
            catName: "Home & Garden"
        },
        {
            catImg: music,
            catName: "Music"
        },
        {
            catImg: pet,
            catName: "pets"
        },
        {
            catImg: baby,
            catName: "Baby Toys"
        },
        {
            catImg: book,
            catName: "Books"
        },
        
        

    ]
    return (
        <>
            <div className="category">
                {
                    data.map((value, index) => {
                        return (
                            <div className="box f_flex" key={index}>
                                <img src={value.catImg} alt={value.catName} />
                                <span>{value.catName}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Categories;