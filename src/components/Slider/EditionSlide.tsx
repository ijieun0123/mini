import styled from "styled-components";
import Button from "../Button/Button";
import { getImageUrl } from "../../utils/utils.ts";

interface SlideProps {
    image: string;
    name: string;
}

const StyledSlide = styled.div``;

const CarImage = styled.img`
    width: 82.222%;
    margin: 22px auto 0;

    @media (min-width: 768px) {
        width: 86.979%;
        margin: 55px auto 0;
    }

    @media (min-width: 1024px) {
        width: 90.625%;
    }

    @media (min-width: 1440px) {
        width: 1254px;
    }
`;

const CarName = styled.h3`
    width: 82.222%;
    margin: 32px auto 0;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: var(--black-color);
    line-height: 1.2;
    text-transform: uppercase;

    @media (min-width: 768px) {
        width: 86.979%;
        margin: 20px auto 0;
        font-size: 20px;
    }

    @media (min-width: 1024px) {
        width: 90.625%;
        margin: 40px auto 0;
        font-size: 30px;
    }

    @media (min-width: 1440px) {
        width: 1254px;
        margin: 36px auto 0;
    }
`;

const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: -10px;

    @media (min-width: 768px) {
        gap: 20px;
        margin-top: -30px;
    }

    @media (min-width: 1024px) {
        margin-top: -10px;
    }
`;

const Slide = ({ image, name }: SlideProps) => {
    const imageUrl = getImageUrl(image);

    return (
        <StyledSlide>
            <CarImage src={imageUrl} alt={name} />
            <CarName>{name}</CarName>
            <BtnBox>
                <Button color="black">Explore</Button>
                <Button color="blue">Buy</Button>
            </BtnBox>
        </StyledSlide>
    );
};

export default Slide;
