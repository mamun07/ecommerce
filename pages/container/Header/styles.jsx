import styled from "styled-components";

export const HeaderTop = styled.div`
  background: var(--dark2);
  color: var(--white2);
  padding: var(--p1);
`;
export const HeaderBottom = styled.div`
  background: var(--white);
  padding: var(--p1);
  box-shadow: 0px -10px 20px 0px var(--dark);
`;
export const HeaderLogo = styled.div`
  a {
    display: flex;
    align-items: center;
  }
`;
export const HeaderSearch = styled.div`
  input {
    width: 100%;
  }
`;
export const CartIcon = styled.div`
  position: relative;
  span {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 100%;
    background: var(--orange);
    color: var(--white);
    font-size: 12px;
    animation: cartsvg 1s infinite;
  }
  @keyframes cartsvg {
    0% {
      background: var(--dark);
    }
    30% {
      background: var(--orange);
    }
  }
`;
export const HeaderCart = styled.div`
  ul {
    li {
      list-style: none;
      float: right;
      width: 40px;
      height: 40px;
      line-height: 40px;
      font-size: 24px;
      margin-left: 5px;
      text-align: center;
      cursor: pointer;
      border: 1px solid;
      border-color: transparent;
      transition: 0.3s;
      border-radius: 100%;
      :hover {
        color: var(--orange);
        border-color: var(--orange);
      }
    }
  }
`;
