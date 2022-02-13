import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";
import Header from "../components/Header";
import Left from "../components/Left";
import Middle from "../components/Middle";
import Right from "../components/Right";
import { Context } from "../context/context";
import { useContext, useEffect, useState } from "react";
import { brightTheme, darkTheme } from "../themes/themes";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 2fr 1.3fr;
  grid-template-rows: 80px calc(100vh - 80px) 1fr;
  grid-template-areas:
    "header header header"
    "left middle right";
  background-color: #e6e6e6;
`;

export default function Home() {
  const { theme, setTheme } = useContext(Context);

  useEffect(() => {
    //
  }, []);

  return (
    <Container theme={theme} brightTheme={brightTheme} darkTheme={darkTheme}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        themeColor={theme}
        brightTheme={brightTheme}
        darkTheme={darkTheme}
      ></Header>
      <Left
        theme={theme}
        brightTheme={brightTheme}
        darkTheme={darkTheme}
      ></Left>
      <Middle
        theme={theme}
        brightTheme={brightTheme}
        darkTheme={darkTheme}
      ></Middle>
      <Right
        theme={theme}
        brightTheme={brightTheme}
        darkTheme={darkTheme}
      ></Right>
    </Container>
  );
}
