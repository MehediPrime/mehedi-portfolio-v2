import React, { useState } from "react";
import './css/Portfolio.css';
import sample from '../img/sample.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Portfolio ({colorBG, colorText, colorDynamic}) {

    const [mediumWidth, setMediumWidth] = useState(false);
    const [smallWidth, setSmallWidth] = useState(false);
    let mediaQueryTab = window.matchMedia("(max-width:  1000px)");
    let mediaQueryMobile = window.matchMedia("(max-width:  650px)");

    mediaQueryTab.addEventListener('change', ()=>{
        mediaQueryTab.matches ? setMediumWidth(true) : setMediumWidth(false)
    });
    mediaQueryMobile.addEventListener('change', ()=>{
        mediaQueryMobile.matches ? setSmallWidth(true) : setSmallWidth(false)
    });
    const workList = [
        {
            image: sample,
            title: "ABC Management System",
            technologyUsed: 'React, Github',
            link: 'https://www.facebook.com/'
        },
        {
            image: sample,
            title: "ABC Management System",
            technologyUsed: 'React, Node, Github',
            link: 'https://www.facebook.com/'
        },
        {
            image: sample,
            title: "ABC Management System",
            technologyUsed: 'React, Node, MongoDB, Github',
            link: 'https://www.facebook.com/'
        },
        {
            image: sample,
            title: "ABC Management System",
            technologyUsed: 'React, Node, MongoDB',
            link: 'https://www.facebook.com/'
        }
    ]

    const initStyle = {
        backgoundColor: colorBG,
        color: colorText,
        margin: '40px auto',
        paddingTop: '75px'
    }

    return(
        <div id="Portfolio" style={initStyle}>
            <h1 className="title" style={{color:colorDynamic}}>Portfolio</h1>
            <h2>Selected Works</h2>
            <div >
            <Swiper 
                centeredSlides={true}
                slidesPerView={mediumWidth ? (smallWidth ? 1 : 2) : 3}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                  }}
                className="workCards"
            >
{
            workList.map((value, key) => {
                return(
                    <SwiperSlide className="workCard" key={key}>
                        <img src={value.image} alt="SampleImage"/>
                        <h2>{value.title}</h2>
                        <p>{value.technologyUsed}</p>
                        <a href={value.link} target='_blank' rel="noreferrer" style={{color:colorDynamic}}>View Live</a>
                    </SwiperSlide>
                )
            } )
        }
            </Swiper>

            </div>
        </div>
    )
}