import styled from "styled-components";

interface CarInfoBoxProps {
    maxPower: string;
    range: string;
    acceleration: string;
    topSpeed: string;
}

const StyledCarInfoBox = styled.ul`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        gap: 50px;
        align-self: center;
    }

    @media (min-width: 1024px) {
        gap: 100px;
    }

    @media (min-width: 1440px) {
        align-self: flex-end;
    }
`;

const InfoItem = styled.li`
    @media (min-width: 768px) {
        font-family: "NanumSquare", sans-serif;
        color: var(--black-color);
    }
`;

const Label = styled.span`
    @media (min-width: 768px) {
        font-weight: 200;
        font-size: 15px;
    }
`;

const Value = styled.p`
    @media (min-width: 768px) {
        margin-top: 5px;
        font-size: 26px;
        font-weight: 500;
    }

    @media (min-width: 1024px) {
        margin-top: 10px;
        font-size: 30px;
    }
`;

const CarInfoBox = ({
    maxPower,
    range,
    acceleration,
    topSpeed,
}: CarInfoBoxProps) => {
    return (
        <StyledCarInfoBox className="car_info_box">
            <InfoItem>
                <Label>최대출력 (kw/PS)</Label>
                <Value>{maxPower}</Value>
            </InfoItem>
            <InfoItem>
                <Label>주행거리</Label>
                <Value>{range}</Value>
            </InfoItem>
            <InfoItem>
                <Label>0-100 km/h(초)</Label>
                <Value>{acceleration}</Value>
            </InfoItem>
            <InfoItem>
                <Label>안전 최고 속도 (km/h)</Label>
                <Value>{topSpeed}</Value>
            </InfoItem>
        </StyledCarInfoBox>
    );
};

export default CarInfoBox;
