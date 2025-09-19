import styled from "styled-components";
import "../../styles/_variables.scss";

interface ButtonProps {
    children: React.ReactNode;
    color?: "black" | "blue";
    "data-aos"?: string;
    "data-aos-delay"?: string;
}

const StyledButton = styled.a`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 40px;
    background: var(--blue-color);
    color: var(--white-color);
    cursor: pointer;

    ${props =>
        props.color === "black" &&
        `
    background: var(--black-color);
  `}

    ${props =>
        props.color === "blue" &&
        `
    background: var(--blue-color);
  `}

    @media (min-width: 768px) {
        width: 216px;
        height: 50px;
    }

    /* 빛 효과를 위한 의사 요소 */
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 100%
        );
        transition: left 0.7s ease;
    }

    /* 호버 시 효과 적용 */
    &:hover::after {
        left: 100%;
    }
`;

const Button = ({ children, color = "blue", ...rest }: ButtonProps) => {
    return (
        <StyledButton href="#" className="button" color={color} {...rest}>
            {children}
        </StyledButton>
    );
};

export default Button;
