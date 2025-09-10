import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className="icon_section">
                    <div className="container">
                        <div className="text_box">
                            <span className="caption">
                                작지만 삶을 넓히는 ICON
                            </span>
                            <h2 className="title">
                                SMALL IN SIZE,
                                <br />
                                BIG IN LIFE
                            </h2>
                            <p className="paragraph">
                                1959년부터 이어져 온 클래식한 매력과 고카트
                                드라이빙 감성,
                                <br />
                                그리고 혁신적인 기술이 만나 도심 라이프를 새롭게
                                정의합니다.
                            </p>
                            <a href="#" className="button">
                                View More
                            </a>
                        </div>
                        <div className="car_box">
                            <div className="img_box">
                                <img src="" alt="car" />
                            </div>
                            <ul className="car_info_box">
                                <li>
                                    <span>최대출력 (kw/PS)</span>
                                    <p>160(218) / 330</p>
                                </li>
                                <li>
                                    <span>주행거리</span>
                                    <p>300km</p>
                                </li>
                                <li>
                                    <span>0-100 km/h(초)</span>
                                    <p>6.7</p>
                                </li>
                                <li>
                                    <span>안전 최고 속도 (km/h)</span>
                                    <p>170</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="impact_section">
                    <div className="img_box">
                        <img src="" alt="" />
                    </div>
                    <div className="container">
                        <div className="text_box">
                            <span className="caption">
                                "내가 MINI다"라는 자신감
                            </span>
                            <h2 className="title">OWN YOUR IMPACT</h2>
                            <p className="paragraph">
                                MINI는 단순한 이동 수단을 넘어, 당신의
                                라이프스타일과 가치를 대변합니다. 작은 차체에
                                담긴 강력한 성능과 세심한 디테일, 그리고 지속
                                가능성을 향한 실천이 만날 때, 당신은 어디에서든
                                자신만의 발자취를 남깁니다.
                            </p>
                            <a href="#" className="button">
                                View More
                            </a>
                        </div>
                    </div>
                </section>
                <section className="services_section">
                    <div className="container">
                        <h2 className="title">MINI SERVICES</h2>
                        <ul>
                            <li>
                                <img src="" alt="" />
                                <p>전체 모델 확인하기</p>
                            </li>
                            <li>
                                <img src="" alt="" />
                                <p>시승신청</p>
                            </li>
                            <li>
                                <img src="" alt="" />
                                <p>MINI 샵온라인</p>
                            </li>
                            <li>
                                <img src="" alt="" />
                                <p>공식 전시장 찾기</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="jcw_section">
                    <div className="container">
                        <div className="text_box">
                            <h2 className="title">MINI JCW</h2>
                            <p className="paragraph">
                                탁월한 코너링을 자랑하는 CONVERTIBLE의 순수한
                                짜릿함을 경험해 보세요. 루프를 열고 바람을
                                느끼는 오픈 에어링의 매력을 새로운 차원으로
                                끌어올렸습니다.
                            </p>
                            <a href="#" className="button">
                                Explore JCW
                            </a>
                        </div>
                        <div className="car_box">
                            <div className="img_box">
                                <img src="" alt="car" />
                            </div>
                            <ul className="car_info_box">
                                <li>
                                    <span>최대출력 (kw/PS)</span>
                                    <p>160(218) / 330</p>
                                </li>
                                <li>
                                    <span>주행거리</span>
                                    <p>300km</p>
                                </li>
                                <li>
                                    <span>0-100 km/h(초)</span>
                                    <p>6.7</p>
                                </li>
                                <li>
                                    <span>안전 최고 속도 (km/h)</span>
                                    <p>170</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="experience_section">
                    <div className="container">
                        <div className="title_box">
                            <span className="caption"></span>
                            <h2 className="title"></h2>
                        </div>
                    </div>
                </section>
                <section className="edition_section">
                    <div className="container">
                        <h2 className="title">MINI EDITION</h2>
                        <div className="slider">
                            <div className="slide">
                                <div className="img_box">
                                    <img src="" alt="" />
                                </div>
                                <p className="car_name">
                                    MINI ELECTRIC COLOUR OF AUGUST
                                </p>
                                <div className="btn_box">
                                    <a href="#" className="button">
                                        Explore
                                    </a>
                                    <a href="#" className="button">
                                        Buy
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="news_section">
                    <h2 className="title">MINI NEWS</h2>
                    <ul className="slider">
                        <li className="slide">
                            <a href="#">
                                <div className="img_box">
                                    <img src="" alt="" />
                                </div>
                                <div className="text_box">
                                    <h3 className="card_title">
                                        MINI CLUBMAN의 시작
                                    </h3>
                                    <p className="paragraph">
                                        누구에게나 친숙한 MINI Clubman. 2007년,
                                        MINI 재출시 버전의 세 번째 변형으로
                                        선보인 이 모델은 다방면으로 인지도와
                                        사랑을 얻었습니다. 특히 독특한 양문형
                                        리어 도어(split rear doors)로 말이죠.
                                        그런데 Clubman의 첫 등장은 이보다 훨씬
                                        더 이전이라는 사실, 알고 계셨나요?
                                        Clubman은 1969년에 ..
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
