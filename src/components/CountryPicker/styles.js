import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import selectArrow from '../../assets/images/icons/form-select-open.svg';

export const Card = styled.div`
  position: relative;

  display: flex;

  width: 9.6rem;
  height: 5rem;

  border-radius: 9px;
  border: 1px solid #bfbfbf;
  border: 2px solid #b2d235;

  color: var(--color-text-base);
  font-family: Montserrat, sans-serif;
  font-size: 1.8rem;
  background: url(${selectArrow}) no-repeat #ffffff;
  background-position: 1rem center;
`;

export const Input = styled.button`
  width: 100%;
  height: 100%;

  margin: auto;

  color: ${rgba('white', 0.85)};
  background: transparent;
`;

export const Placeholder = styled.div`
  padding-left: 2rem;
  padding-top: 0.5rem;

  color: ${rgba('black', 0.5)};

  img {
    width: 3.5rem;
  }
`;

export const Row = styled.button`
  overflow: hidden;
  display: flex;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  width: 100%;
  background: white;

  span {
    margin-left: 0.5rem;
  }
`;

export const Flag = styled.img`
  width: 30px;
`;

export const openStyles = css`
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
`;

export const Dialog = styled.div`
  position: absolute;
  z-index: 9999;
  overflow: auto;
  top: 100%;
  right: 0;
  width: 300px;
  height: 250px;
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.16);
  visibility: hidden;
  opacity: 0;
  transform: translateY(1rem);
  transition-property: visibility, opacity, transform;
  transition-duration: 0.35s;

  ${p => p.open && openStyles};
`;
