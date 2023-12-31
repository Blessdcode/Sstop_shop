import { css } from "styled-components";

export const small = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 868px) {
      ${props}
    }
  `;
};
export const large = (props) => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `;
};
