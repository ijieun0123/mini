import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import EditionSlide from "./EditionSlide";
import styled from "styled-components";
import "./EditionSlider.scss";

const editionData = [
    {
        id: 1,
        image: "/img/edition_section_car_1.png",
        name: "MINI ELECTRIC COLOUR OF AUGUST",
    },
    {
        id: 2,
        image: "/img/edition_section_car_2.png",
        name: "Morris Mini 1000 Mk II",
    },
    {
        id: 3,
        image: "/img/edition_section_car_3.png",
        name: "Austin Mini-Cooper S 1275",
    },
];

interface EditionSliderProps {
    "data-aos"?: string;
    "data-aos-delay"?: string;
    "data-aos-duration"?: string;
}

const StyledSwiper = styled(Swiper)`
    padding-bottom: 50px;
    overflow: visible;
`;

const EditionSlider = ({ ...rest }: EditionSliderProps) => {
    return (
        <StyledSwiper
            modules={[Mousewheel, Pagination]}
            mousewheel={{
                forceToAxis: true,
            }}
            pagination={{ clickable: true }}
            direction={"horizontal"}
            slidesPerView={1}
            speed={1000}
            {...rest}
        >
            {editionData.map(data => (
                <SwiperSlide key={data.id}>
                    <EditionSlide image={data.image} name={data.name} />
                </SwiperSlide>
            ))}
        </StyledSwiper>
    );
};

export default EditionSlider;
