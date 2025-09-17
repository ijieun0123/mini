import styled from "styled-components";
import { getImageUrl } from "../../utils/utils.ts";

interface CardProps {
    image: string;
    title: string;
    content: string;
}

interface CardImageProps {
    image: string;
}

const StyledCard = styled.a`
    display: block;
    margin: 0 auto;
    width: 293px;
    box-shadow: 0 4px 12px 0 rgba(0, 59, 76, 0.2);

    @media (min-width: 768px) {
        width: 410px;
        margin: 0;
    }

    @media (min-width: 1024px) {
        width: 445px;
    }

    @media (min-width: 1440px) {
        width: 452px;
    }
`;

const CardImage = styled.div<CardImageProps>`
    width: 293px;
    height: 182px;
    // padding-bottom: 62.116%;
    background: url(${props => props.image}) no-repeat center/cover;

    @media (min-width: 768px) {
        width: 410px;
        height: 255px;
    }

    @media (min-width: 1024px) {
        width: 445px;
        height: 255px;
    }

    @media (min-width: 1440px) {
        width: 452px;
    }
`;

const CardTextBox = styled.div`
    width: 100%;
    height: 231px;
    background: #fff;
    padding: 25px 25px 40px 25px;

    @media (min-width: 768px) {
        width: 410px;
        height: auto;
        padding: 40px 30px 60px 30px;
    }

    @media (min-width: 1024px) {
        width: 445px;
        padding: 40px 35px 60px 35px;
    }

    @media (min-width: 1440px) {
        width: 452px;
        padding: ;
    }
`;

const CardTitle = styled.h3`
    margin-bottom: 10px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: var(--black-color);
    word-break: keep-all;

    @media (min-width: 768px) {
        margin-bottom: 20px;
        font-size: 25px;
    }
`;

const CardContent = styled.p`
    font-family: "NanumSquare", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.375;
    color: var(--black-color);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    word-break: keep-all;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 1.33;
        -webkit-line-clamp: 6;
    }

    @media (min-width: 1024px) {
        -webkit-line-clamp: 5;
    }

    @media (min-width: 1440px) {
        -webkit-line-clamp: 6;
    }
`;

const NewsCard = ({ image, title, content }: CardProps) => {
    const imageUrl = getImageUrl(image);

    return (
        <StyledCard href="#">
            <CardImage image={imageUrl}></CardImage>
            <CardTextBox>
                <CardTitle>{title}</CardTitle>
                <CardContent>{content}</CardContent>
            </CardTextBox>
        </StyledCard>
    );
};

export default NewsCard;
