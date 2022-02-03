import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 80px calc(100vh - 80px) 1fr;
  grid-template-areas:
    "header header header"
    "left middle right";
`;

export const Header = styled.div`
  grid-area: header;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Left = styled.div`
  grid-area: left;
  background-color: #890e0e;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Middle = styled.div`
  grid-area: middle;
  background-color: yellow;
`;

export const Right = styled.div`
  grid-area: right;
  background-color: #2f42d2;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Left>l</Left>
      <Middle>m</Middle>
      <Right>r</Right>
    </Container>
  );
}
