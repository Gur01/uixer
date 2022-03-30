import { colors } from '@/constants';
import { Dropdown } from '@/ui/Icons';
import { useState } from 'react';
import styled from 'styled-components';

const Select = ({className, onChange, items, placeholder}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [selected, setSelected] = useState(placeholder);

    const select = (value) => {
        if(!items) return;

        setSelected(value);
        setIsOpened(false);

        onChange && onChange(value)
    };
    
    return (
        <Box className={className}>
            <Selected onClick={() => setIsOpened(!isOpened)}>
                <span>{selected}</span>
                <StyledDropdown isOpened={isOpened} />
            </Selected>
            {isOpened && <DropdownBox>
                {items && items.map((item, index) => {
                    return (
                        <DropdownItem key={index} onClick={() => select(item)}>{item}</DropdownItem> 
                    )
                })}
            </DropdownBox>}
        </Box>
    )
}

export default Select;

const DropdownItem = styled.div`
    padding: 10px;
    font-size: 0.7rem;
    color: ${colors.lightBlack};
    cursor: pointer;

`

const DropdownBox = styled.div`
    position: absolute;
    top: 100%;
    z-index: 1;
    width: 100%;
    background-color: ${colors.white};
`
const Box = styled.div`
    position: relative;
`

const InputBox = styled.div`
    position: relative;
`

const Selected = styled.div`
    border-bottom: 1px solid ${({ error }) => error ? '#FF0000' : '#E9E9E9'}; 
    color: ${({ error }) => error ? '#FF0000' : '#0F0F10'};
    cursor: pointer;
    font-family: inherit;
    justify-content: space-between;
	align-items: center;
    padding: 10px;
    display: flex;
    
    span {
        font-size: 0.7rem;
        color: ${colors.lightBlack}
    }

`

const StyledDropdown = styled(Dropdown)`
    transition: all 0.3s ease;
    /* transform: rotate(180deg); */

    ${({ isOpened }) => isOpened && "transform: rotate(180deg)"}
`

