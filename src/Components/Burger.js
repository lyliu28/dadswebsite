import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
  position: absolute;
  padding: 1px;
  top: 26px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

const Line = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: black;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 4.5px;

  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <Line style={{
        transform: open ? 'rotate(45deg)' : 'rotate(0)'
        }}/>
      {!open && <Line/>}
      <Line style={{
        transform: open ? 'rotate(-45deg)' : 'rotate(0)'
        }}/>
    </StyledBurger>
  )
}


export default Burger;
