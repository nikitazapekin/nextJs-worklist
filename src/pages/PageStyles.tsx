import styled from "styled-components";
export const LayoutWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`
interface LayoutProps  {
    isBlack: boolean;
} 
export const Layout = styled.div<LayoutProps>`
background-color:${props=> props.isBlack ? " rgba(52, 54, 53)" : "none"};
z-index: -1;
flex-grow: 1;
 
`