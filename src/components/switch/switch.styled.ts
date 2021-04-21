import styled from "styled-components";
import { Color } from "../../enums/color.enum";

export const Container = styled.button`
  width: 50px;
  height: 20px;
  border-radius: 10px;
  position: relative;
  border: 1px solid ${Color.Black};
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Ball = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  background-color: ${Color.Black};
  border-radius: 50%;
  transition: 0.3s;
  z-index: 2;

  ${({isActive}) => isActive ? `left: ${48 - 16}px` : 'left: 2px'}
`;

export const Value = styled.span`
  font-weight: 700;
  text-transform: uppercase;
`;
