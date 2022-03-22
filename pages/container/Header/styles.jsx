import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const HeaderTop = styled.div`
  background: var(--dark2);
  color: var(--white2);
  padding: var(--p1);
`;
export const HeaderBottom = styled(Navbar)`
  background: var(--white);
  padding: var(--p1);
  border-bottom: 1px solid var(--white2);
`;
export const HeaderLogo = styled.div`
  @media (max-width: 425px) {
    img {
      width: 80px !important;
    }
  }
`;
export const HeaderSearch = styled.div`
  input[type="text"] {
    width: 600px;
    border-radius: 50px;
  }
  @media (max-width: 768px) {
    input[type="text"] {
      width: 300px;
    }
  }
  @media (max-width: 500px) {
    input[type="text"] {
      width: 200px;
    }
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

export const TopInfo = styled.div`
  ul {
    li {
      list-style: none;
      float: left;
      margin-right: 20px;
      a {
        color: var(--white4);
        font-size: 16px;
        i {
          margin-right: 5px;
          font-size: 20px;
        }
      }
    }
    li:last-child {
      margin-right: 0;
    }
  }
`;
export const TopMenu = styled.div`
  ul {
    float: right;
    li {
      list-style: none;
      float: left;
      margin-right: 20px;
      a {
        color: var(--white4);
        font-size: 16px;
        i {
          margin-right: 5px;
          font-size: 20px;
        }
      }
    }
    li:last-child {
      margin-right: 0;
    }
  }
`;
