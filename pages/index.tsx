import Layout from "../components/Layout";
import Prices from "../components/Prices";
import { Bpi } from "../components/bpi";
import { FunctionComponent, useState, useEffect } from "react";

const Index: FunctionComponent = () => {
  const [bpi, setBpi] = useState<Bpi>();

  // Fetch bpi
  useEffect(() => {
    async function fetchBpi() {
      const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
      const data = await res.json();
      setBpi(data.bpi);
    }
    fetchBpi();
  }, []);
  return (
    <Layout>
      <div>
        <h1>Welcome to BitzPrice</h1>
        <p>Check current Bitcoin rate.</p>
        { bpi && <Prices bpi={bpi} />}
      </div>
    </Layout>
  )
};

export default Index;
