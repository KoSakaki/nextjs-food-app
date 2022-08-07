import React from "react"
import App from "next/app"
import Head from "next/head"
import Link from "next/link"
import {Container, Nav, NavItem} from "reactstrap"

const Layout = (props) => {
  return (
    <>
    <Head>
      <title>フードデリバリー</title>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
    </Head>
    <header>
      <style jsx>
        {
          `
          a {
            color:white;
          }
          `
        }
        </style>
      <Nav class="navbar navbar-dark bg-dark">
        <NavItem>
          <Link href="/">
            <a className="navbar-brand">ホーム</a>
          </Link>
        </NavItem>
        <NavItem className="ml-auto">
          <Link href="/login">
            <a className="navbar-link">サインイン</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/register">
            <a className="navbar-link">サインアップ</a>
          </Link>
        </NavItem>
      </Nav>
    </header>
    <Container>{props.children}</Container>
    </>
  );
}


export default Layout;
