import React from "react";
import { Layout } from "antd";
import img from "./img/Система-качества.webp";
import "./App.css";

const { Content } = Layout;

function App() {
  const openGoogleImageSearch = () => {
    const googleSearchUrl = `https://www.google.com/searchbyimage?image_url=${encodeURIComponent(window.location.origin + img)}`;
    window.open(googleSearchUrl, "_blank");
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "80px",
          }}
        >
          <div className="image-frame">
            <img
              src={img}
              alt="Сертификат качества системы Меркурон"
              title="Сертификат качества системы Меркурон"
              className="image"
              onClick={openGoogleImageSearch}
              style={{
                cursor: "pointer",
              }}
            />
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Сертификат качества системы Меркурон
            </p>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
