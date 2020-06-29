import Head from "next/head";
import Navbar from "./Navbar";
import { FunctionComponent } from "react";

const Layout: FunctionComponent = (props: { children?: any }) => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
    </Head>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;
