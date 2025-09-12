import styled from "styled-components";
import "../../styles/_variables.scss";

interface ButtonProps {
    children: React.ReactNode;
    color?: "black" | "blue";
}

const StyledButton = styled.button`
    width: 140px;
    height: 40px;
    background: var(--blue-color);
    color: var(--white-color);

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
`;

const Button = ({ children, color = "blue" }: ButtonProps) => {
    return (
        <StyledButton className="button" color={color}>
            {children}
        </StyledButton>
    );
};

export default Button;
