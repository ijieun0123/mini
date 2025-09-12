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
                            <div className="bg_car"></div>
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
                    <div className="bg_photo"></div>
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
                                <a href="#">
                                    <div className="bg_icon"></div>
                                    <p>전체 모델 확인하기</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="bg_icon"></div>
                                    <p>시승신청</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="bg_icon"></div>
                                    <p>MINI 샵온라인</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="bg_icon"></div>
                                    <p>공식 전시장 찾기</p>
                                </a>
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
                            <div className="bg_car"></div>
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
                <section className="digital_section">
                    <div className="container">
                        <div className="title_box">
                            <span className="caption">
                                MINI가 선보이는 혁신
                            </span>
                            <h2 className="title">MINI DIGITAL EXPERIENCE</h2>
                        </div>
                        <div className="img_text_box">
                            <div>
                                <div className="bg_digital"></div>
                                <b>
                                    MINI가 선보이는 혁신과 드라이빙의 융합을
                                    경험해 보세요.{" "}
                                </b>
                                <p>
                                    주행 경험을 향상시키는 첨단 기술과
                                    커넥티비티의 세계로 초대합니다. 지능형
                                    인포테인먼트(infotainment)부터 몰입감을
                                    선사하는 주행모드에 이르기까지, MINI가
                                    제시하는 미래의 모습을 확인해 보세요.{" "}
                                </p>
                            </div>
                            <div>
                                <div className="bg_digital"></div>
                                <p>
                                    MINI의 새로운 오퍼레이팅 시스템 9(Operating
                                    System 9)은 새롭고 직관적인 경험을
                                    제공합니다. 운전자는 언제 어디서든 MINI와
                                    연결되어 간단하게 모든 것을 컨트롤할 수
                                    있죠.
                                </p>
                            </div>
                            <a href="#" className="button">
                                View More
                            </a>
                        </div>
                    </div>
                </section>
                <section className="edition_section">
                    <div className="container">
                        <h2 className="title">MINI EDITION</h2>
                        <div className="slider">
                            <div className="swiper_wrap">
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
                    </div>
                </section>
                <section className="news_section">
                    <h2 className="title">MINI NEWS</h2>
                    <div className="bg_car"></div>
                    <div className="slider">
                        <div className="slider_wrap">
                            <div className="slide">
                                <a href="#">
                                    <div className="bg_photo"></div>
                                    <div className="text_box">
                                        <h3 className="card_title">
                                            MINI CLUBMAN의 시작
                                        </h3>
                                        <p className="paragraph">
                                            누구에게나 친숙한 MINI Clubman.
                                            2007년, MINI 재출시 버전의 세 번째
                                            변형으로 선보인 이 모델은 다방면으로
                                            인지도와 사랑을 얻었습니다. 특히
                                            독특한 양문형 리어 도어(split rear
                                            doors)로 말이죠. 그런데 Clubman의 첫
                                            등장은 이보다 훨씬 더 이전이라는
                                            사실, 알고 계셨나요? Clubman은
                                            1969년에 ..
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
