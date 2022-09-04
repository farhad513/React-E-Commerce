import React from 'react';
// import cover from '../../images/banner.jpg';
import cover from '../../images/cover/banner-4.png'
import cover1 from '../../images/cover/cover1.jpg'
const Anno = () => {
    const myStyle = {
        width: '30%',
        height: '340px'
    }
    const myStyle1 = {
        width: '68%',
        height: '340px'
    }
    return (
        <>
            <div className="annocument background" >
                <div className="container d_flex">
                    <div className="img" style={myStyle}>
                        <img src={cover} alt="" width='100%' height='100%' />
                    </div>
                    <div className="img" style={myStyle1}>
                        <img src={cover1} alt="" width='100%' height='100%' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Anno;