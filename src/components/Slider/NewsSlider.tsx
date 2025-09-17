import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./NewsSlider.scss";
import NewsCard from "../Card/NewsCard";
("../Card/NewsCard");

// 카드 데이터 (예시)
const cardData = [
    {
        id: 1,
        image: "/img/news_section_photo_1.png",
        title: "MINI CLUBMAN의 시작",
        content:
            "누구에게나 친숙한 MINI Clubman. 2007년, MINI 재출시 버전의 세 번째 변형으로 선보인 이 모델은 다방면으로 인지도와 사랑을 얻었습니다. 특히 독특한 양문형 리어 도어(split rear doors)로 말이죠. 그런데 Clubman의 첫 등장은 이보다 훨씬 더 이전이라는 사실, 알고 계셨나요? Clubman은 1969년에 ...",
    },
    {
        id: 2,
        image: "/img/news_section_photo_2.png",
        title: "MINI를 통해 얻는 다양한 영감",
        content:
            "디자이너 하나 타지마(Hana Tajima)는 영국-일본계 무슬림 여성입니다. 그녀의 디자인 작업물에는 다양한 문화적 요소들의 조화가 두드러지게 나타납니다. 우리는 뉴욕 업스테이트에 위치한 그녀의 집에서 이야기를 나누었습니다. 하나 타지마의 아침은 소박하고 평온하게 시작됩니다. 아침에 일어나면 ...",
    },
    {
        id: 3,
        image: "/img/news_section_photo_3.png",
        title: "THE MINI COUNTRYMAN",
        content:
            "역사상 가장 큰 MINI지만, 군더더기를 없애고 MINI만의 오리지널리티를 강화했습니다. 견고한 외관과 날렵한 라인, 그리고 무엇보다 숨길 수 없는 ‘MINI다움’ 같은 것들 말이죠. 쾌적한 편안함으로 흥미진진한 장소에 데려다줄 SUV, 바로 MINI Countryman을 소개합니다. 특유의 대담함이 더해져 더할 나위 없이 믿음 ...",
    },
];

interface NewsSliderProps {
    "data-aos"?: string;
    "data-aos-delay"?: string;
    "data-aos-duration"?: string;
}

const CardSlider = ({ ...rest }: NewsSliderProps) => {
    return (
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            className="mySwiper"
            breakpoints={{
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                },
            }}
            {...rest}
        >
            {cardData.map(card => (
                <SwiperSlide key={card.id}>
                    <NewsCard
                        title={card.title}
                        content={card.content}
                        image={card.image}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardSlider;
