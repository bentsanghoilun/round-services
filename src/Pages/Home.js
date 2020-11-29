import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import Zoom from 'react-reveal/Zoom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Home.css';

import Image from '../UI/Image';
import s0 from '../img/slides/s0.jpg';
import s1 from '../img/slides/s1.jpg';
import s2 from '../img/slides/s2.jpg';
import s3 from '../img/slides/s3.jpg';
import s4 from '../img/slides/s4.jpg';
import s5 from '../img/slides/s5.jpg';
import s6 from '../img/slides/s6.jpg';
import dds from '../img/disney.jpg';
import as1 from '../img/assoc/tichk.jpg';
import as2 from '../img/assoc/hjtoa.jpg';
import as3 from '../img/assoc/hata.jpg';
import as4 from '../img/assoc/hkia.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Home = props => {
    return(
        <React.Fragment>
                <Row className=''>
                    <Col>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            autoplay={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            className='mainslider'
                        >
                            <SwiperSlide><Image src={s0} /></SwiperSlide>
                            <SwiperSlide><Image src={s1} /></SwiperSlide>
                            <SwiperSlide><Image src={s2} /></SwiperSlide>
                            <SwiperSlide><Image src={s3} /></SwiperSlide>
                            <SwiperSlide><Image src={s4} /></SwiperSlide>
                            <SwiperSlide><Image src={s5} /></SwiperSlide>
                            <SwiperSlide><Image src={s6} /></SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>

                <Row className='justify-content-center'>
                    <Col><h1 className='text-center brand-text'>Travel Services</h1></Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className='badge'>
                            <svg width="96px" height="96px" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <title>icons set</title>
                                <g id="icons-set" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="bus" transform="translate(-3.000000, -21.000000)">
                                        <path d="M5,70 L13,70 C15.209139,70 17,71.790861 17,74 L17,79 C17,81.209139 15.209139,83 13,83 L5,83 L5,83 L5,70 Z" id="headLight" stroke="#F15152" stroke-width="4" stroke-linejoin="round"></path>
                                        <path d="M30.5339395,23 L116,23 C120.418278,23 124,26.581722 124,31 L124,86 C124,90.418278 120.418278,94 116,94 L13,94 C8.581722,94 5,90.418278 5,86 L5,58.0664062 L5,58.0664062 L23.670558,26.8897695 C25.115554,24.4768734 27.7214528,23 30.5339395,23 Z" id="body" stroke="#0E6C92" stroke-width="4" stroke-linejoin="round"></path>
                                        <circle id="frontwheel" fill="#3A2E39" cx="35" cy="90" r="15"></circle>
                                        <circle id="backwheel" fill="#3A2E39" cx="97" cy="90" r="15"></circle>
                                        <rect id="realWindow" stroke="#F15152" stroke-width="4" stroke-linejoin="round" x="76" y="33" width="38" height="29" rx="4"></rect>
                                        <path d="M33.0887545,33 L63.5,33 C65.709139,33 67.5,34.790861 67.5,37 L67.5,58 C67.5,60.209139 65.709139,62 63.5,62 L21.3254364,62 C19.1162975,62 17.3254364,60.209139 17.3254364,58 C17.3254364,57.3154663 17.5011102,56.6423863 17.8356475,56.0451668 L29.5989655,35.0451668 C30.3064404,33.7821752 31.6411121,33 33.0887545,33 Z" id="frontWindow" stroke="#F15152" stroke-width="4" stroke-linejoin="round"></path>
                                    </g>
                                </g>
                            </svg>
                            <h4>Transfer Service</h4>
                            <p>Point to point or airport</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='badge'>
                            <svg width="96px" height="96px" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <title>flexTour</title>
                                <g id="icons-set" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="flexTour">
                                        <ellipse id="base" fill="#3A2E39" cx="64" cy="88" rx="51" ry="15"></ellipse>
                                        <g id="p3" transform="translate(79.000000, 36.000000)" stroke-width="4">
                                            <path d="M15,45 C20.2524038,45 30,23.0869469 30,14.8728814 C30,6.6588158 23.2842712,0 15,0 C6.71572875,0 0,6.6588158 0,14.8728814 C0,23.0869469 9.74759615,45 15,45 Z" id="Oval" stroke="#0E6C92" fill="#FFFFFF"></path>
                                            <circle id="Oval" stroke="#F15152" cx="15" cy="15" r="7"></circle>
                                        </g>
                                        <g id="p2" transform="translate(20.000000, 35.000000)" stroke-width="4">
                                            <path d="M15,45 C20.2524038,45 30,23.0869469 30,14.8728814 C30,6.6588158 23.2842712,0 15,0 C6.71572875,0 0,6.6588158 0,14.8728814 C0,23.0869469 9.74759615,45 15,45 Z" id="Oval" stroke="#0E6C92" fill="#FFFFFF"></path>
                                            <circle id="Oval" stroke="#F15152" cx="15" cy="15" r="7"></circle>
                                        </g>
                                        <g id="p1" transform="translate(44.666667, 29.000000)" stroke-width="4">
                                            <path d="M19.8333333,58 C26.6614583,58 39.3333333,29.7565094 39.3333333,19.1694915 C39.3333333,8.58247369 30.602886,0 19.8333333,0 C9.06378071,0 0.333333333,8.58247369 0.333333333,19.1694915 C0.333333333,29.7565094 13.0052083,58 19.8333333,58 Z" id="Oval" stroke="#0E6C92" fill="#FFFFFF"></path>
                                            <circle id="Oval" stroke="#F15152" cx="19.8333333" cy="19.5" r="9.5"></circle>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h4>FlexTour</h4>
                            <p>Mix & Match your perfect tour!</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='badge'>
                            <svg width="96px" height="96px" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <title>tix</title>
                                <g id="icons-set" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="tix">
                                        <path d="M65,39 L65.0000497,47.0354373 C63.3038784,47.2780307 62,48.7367468 62,50.5 C62,52.2632532 63.3038784,53.7219693 65.0000497,53.9645627 L65.0000497,60.0354373 C63.3038784,60.2780307 62,61.7367468 62,63.5 C62,65.2632532 63.3038784,66.7219693 65.0000497,66.9645627 L65.0000497,73.0354373 C63.3038784,73.2780307 62,74.7367468 62,76.5 C62,78.2632532 63.3038784,79.7219693 65.0000497,79.9645627 L65,89 L26,89 C23.790861,89 22,87.209139 22,85 L22,43 C22,40.790861 23.790861,39 26,39 L65,39 Z" id="L" fill="#0E6C92"></path>
                                        <path d="M108,39 L108.00095,48.0355804 C107.837346,48.0121329 107.67009,48 107.5,48 C105.567003,48 104,49.5670034 104,51.5 C104,53.4329966 105.567003,55 107.5,55 C107.67009,55 107.837346,54.9878671 108.00095,54.9644196 L108.00095,61.0355804 C107.837346,61.0121329 107.67009,61 107.5,61 C105.567003,61 104,62.5670034 104,64.5 C104,66.4329966 105.567003,68 107.5,68 C107.67009,68 107.837346,67.9878671 108.00095,67.9644196 L108.00095,74.0355804 C107.837346,74.0121329 107.67009,74 107.5,74 C105.567003,74 104,75.5670034 104,77.5 C104,79.4329966 105.567003,81 107.5,81 C107.67009,81 107.837346,80.9878671 108.00095,80.9644196 L108,89 L69,89 C66.790861,89 65,87.209139 65,85 L65,43 C65,40.790861 66.790861,39 69,39 L108,39 Z" id="R" fill="#F15152" transform="translate(86.500475, 64.000000) rotate(180.000000) translate(-86.500475, -64.000000) "></path>
                                    </g>
                                </g>
                            </svg>
                            <h4>Ticketing</h4>
                            <p>All the tickets ready!</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='badge'>
                            <svg width="96px" height="96px" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <title>hike</title>
                                <g id="icons-set" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="hike">
                                        <path d="M94.7899917,48.9274773 L122.183109,75.8785376 C124.177471,77.8407151 124.177471,81.0220335 122.183109,82.984211 C121.225383,83.9264819 119.926428,84.4558441 118.571998,84.4558441 L63.7857629,84.4558441 C60.9653097,84.4558441 58.6788806,82.2063124 58.6788806,79.4313743 C58.6788806,78.098802 59.2169256,76.8208085 60.1746518,75.8785376 L87.5677695,48.9274773 C89.5621311,46.9652997 92.7956301,46.9652997 94.7899917,48.9274773 Z" id="mdHill" fill="#F15152"></path>
                                        <path d="M32.0122139,44.9274773 L53.5052755,71.8785376 C55.0700823,73.8407151 55.0700823,77.0220335 53.5052755,78.984211 C52.7538288,79.9264819 51.7346483,80.4558441 50.6719422,80.4558441 L7.68581901,80.4558441 C5.47284802,80.4558441 3.67888058,78.2063124 3.67888058,75.4313743 C3.67888058,74.098802 4.10103895,72.8208085 4.85248567,71.8785376 L26.3455472,44.9274773 C27.910354,42.9652997 30.4474071,42.9652997 32.0122139,44.9274773 Z" id="smHill" fill="#3A2E39"></path>
                                        <path d="M62.9030185,35.9914902 L98.5505057,84.5054427 C100.055006,86.5529708 100.055006,89.8726699 98.5505057,91.920198 C97.8280194,92.9034557 96.8481177,93.4558441 95.8263678,93.4558441 L24.5313934,93.4558441 C22.4037093,93.4558441 20.6788806,91.1084624 20.6788806,88.2128203 C20.6788806,86.822284 21.0847692,85.4887004 21.8072555,84.5054427 L57.4547426,35.9914902 C58.9592425,33.9439621 61.3985187,33.9439621 62.9030185,35.9914902 Z" id="bigHill" fill="#0E6C92"></path>
                                    </g>
                                </g>
                            </svg>
                            <h4>Outdoor Adventure</h4>
                            <p>Get a view!</p>
                        </div>
                    </Col>
                </Row>

                <Row className=''>
                    <Col sm={12} lg={6}>
                        <div className='banner brand-bg rounded' style={{padding:'0px'}}>
                            <img className='banner-bg-placeholder' src={dds} />
                            <div className='banner-inner'>
                                <h3>Make your own tour!</h3>
                                <p>Create your own day tour by mix and matching your favourite attractions!</p>
                                <Link to='/flextour' className='brand-bg right-align'>Learn more</Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className='banner brand-bg rounded' style={{padding:'0px'}}>
                            <Image src={dds} />
                            <h3
                                style={{
                                position: 'absolute',
                                padding: '2rem',
                                bottom: '0rem',
                                left: '0rem',
                                textShadow: '0rem 0rem 1rem rgba(0,0,0,1)',
                                }}
                            >Book Disneyland & Stay!</h3>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Zoom>
                            <div className='rounded light-bg'>
                                <Row>
                                    <Col>
                                        <h1 className='text-center brand-text'>Who we are</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p><b>Round Service Travel</b> is a premium travel agent and tour organizer in Hong Kong. Established in 1992, our experienced and professional travel consultants offer dedicated, tailor-made services for corporate traveler, leisure traveler as well as holiday-maker. We are experienced in organizing concert tour, business and corporate meetings, such as seminars and workshops.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Zoom>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{padding: '1rem'}}></div>
                    </Col>
                </Row>
                <Zoom>
                    <Row className=''>
                        <Container>
                            <Row className='justify-content-center'>
                                <h1 className='text-center brand-text'>Affiliations</h1>
                            </Row>
                            <Row>
                                <Col lg={3} sm={6}><div className='badge'> <img src={as1} /></div></Col>
                                <Col lg={3} sm={6}><div className='badge'> <img src={as2} /></div></Col>
                                <Col lg={3} sm={6}><div className='badge'> <img src={as3} /></div></Col>
                                <Col lg={3} sm={6}><div className='badge'> <img src={as4} /></div></Col>
                            </Row>
                        </Container>
                    </Row>
                </Zoom>
                <Row>
                    <Col>
                        <div style={{padding: '1rem'}}></div>
                    </Col>
                </Row>
        </React.Fragment>
    )
}

export default Home;