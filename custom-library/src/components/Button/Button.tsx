import React, {MouseEvent} from 'react'
import {StyledButton} from "./Button.style";

type Props = {
    children: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
