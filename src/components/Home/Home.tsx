import Button from "../Button/Button";
import CarInfoBox from "../CarInfoBox/CarInfoBox";
import EditionSlider from "../Slider/EditionSlider";
import NewsSlider from "../Slider/NewsSlider";
import { getImageUrl } from "../../utils/utils";

const Home = () => {
    const IntroSectioncarImgUrl = getImageUrl("/img/intro_section_car.png");

    return (
        <main>
            <section className="intro_section">
                <div className="container">
                    <div className="text_box" data-aos="fade-up">
                        <span
                            className="caption"
                            data-aos="fade-up"
                            data-aos-delay=""
                        >
                            작지만 삶을 넓히는 ICON
                        </span>
                        <h2
                            className="title"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            SMALL IN SIZE,
                            <br />
                            BIG IN LIFE
                        </h2>
                        <p
                            className="paragraph"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            1959년부터 이어져 온 클래식한 매력과 고카트 드라이빙
                            감성,
                            <br className="hide_on_mobile" />
                            그리고 혁신적인 기술이 만나 도심 라이프를 새롭게
                            정의합니다.
                        </p>
                        <Button
                            color="black"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            View More
                        </Button>
                    </div>
                    <div
                        className="car_box"
                        data-aos="fade-down-left"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <div className="img_box">
                            <img
                                src={IntroSectioncarImgUrl}
                                alt="미니 자동차"
                                className="car_img"
                            />
                        </div>
                        <CarInfoBox
                            maxPower="160(218) / 330"
                            range="300km"
                            acceleration="6.7"
                            topSpeed="170"
                            data-aos="fade-up"
                            data-aos-duration="5000"
                        />
                    </div>
                </div>
            </section>
            <section className="impact_section">
                <div
                    className="bg_photo"
                    data-aos="fade"
                    data-aos-duration="3000"
                    data-aos-delay="600"
                ></div>
                <div className="text_box">
                    <span
                        className="caption"
                        data-aos="fade-up"
                        data-aos-delay="0"
                    >
                        "내가 MINI다"라는 자신감
                    </span>
                    <h2
                        className="title"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        OWN
                        <br className="show_on_mobile" />
                        <span className="hide_on_mobile"> </span>
                        YOUR IMPACT
                    </h2>
                    <p
                        className="paragraph"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        MINI는 단순한 이동 수단을 넘어, 당신의 라이프스타일과
                        가치를 대변합니다. 작은 차체에 담긴 강력한 성능과 세심한
                        디테일, 그리고 지속 가능성을 향한 실천이 만날 때, 당신은
                        어디에서든 자신만의 발자취를 남깁니다.
                    </p>
                    <Button
                        color="blue"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        View More
                    </Button>
                </div>
            </section>
            <section className="services_section">
                <div className="container">
                    <h2 className="title" data-aos="fade-up">
                        MINI SERVICES
                    </h2>
                    <ul data-aos="fade-up" data-aos-delay="200">
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
                        <h2
                            className="title"
                            data-aos="fade-up"
                            data-aos-delay=""
                        >
                            MINI JCW
                        </h2>
                        <p
                            className="paragraph"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            탁월한 코너링을 자랑하는 CONVERTIBLE의 순수한
                            짜릿함을 경험해 보세요.
                            <br /> 루프를 열고 바람을 느끼는 오픈 에어링의
                            매력을 새로운 차원으로 끌어올렸습니다.
                        </p>
                        <Button
                            color="blue"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Explore JCW
                        </Button>
                    </div>
                    <div
                        className="car_box"
                        data-aos="fade-up-right"
                        data-aos-delay="600"
                        data-aos-duration="1000"
                    >
                        <div className="bg_car"></div>
                        <CarInfoBox
                            maxPower="160(218) / 330"
                            range="300km"
                            acceleration="6.7"
                            topSpeed="170"
                        />
                    </div>
                </div>
            </section>
            <section className="digital_section">
                <div className="container">
                    <div className="title_box" data-aos="fade">
                        <span className="caption">MINI가 선보이는 혁신</span>
                        <h2 className="title">
                            MINI DIGITAL <br />
                            EXPERIENCE
                        </h2>
                    </div>
                    <div className="img_text_box">
                        <div
                            className="left_contents"
                            data-aos="fade-down-right"
                            data-aos-delay="200"
                        >
                            <div className="bg_digital"></div>
                            <div>
                                <b>MINI가 선보이는 혁신과 드라이빙의 융합</b>
                                <p className="paragraph">
                                    주행 경험을 향상시키는 첨단 기술과
                                    커넥티비티의 세계로 초대합니다. 지능형
                                    인포테인먼트(infotainment)부터 몰입감을
                                    선사하는 주행모드에 이르기까지, MINI가
                                    제시하는 미래의 모습을 확인해 보세요.{" "}
                                </p>
                            </div>
                        </div>
                        <div
                            className="right_contents"
                            data-aos="fade-up-left"
                            data-aos-delay="200"
                        >
                            <div className="bg_digital"></div>
                            <p className="paragraph">
                                MINI의 새로운 오퍼레이팅 시스템 9(Operating
                                System 9)은 새롭고 직관적인 경험을 제공합니다.
                                운전자는 언제 어디서든 MINI와 연결되어 간단하게
                                모든 것을 컨트롤할 수 있죠.
                            </p>
                            <Button color="blue">View More</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="edition_section">
                <div className="container">
                    <h2 className="title" data-aos="fade-up">
                        MINI EDITION
                    </h2>
                    <EditionSlider
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="2000"
                    />
                </div>
            </section>
            <section className="news_section">
                <h2 className="title" data-aos="fade-up">
                    MINI NEWS
                </h2>
                <div
                    className="bg_car"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                ></div>
                <NewsSlider
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                />
            </section>
        </main>
    );
};

export default Home;
