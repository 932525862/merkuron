import React from "react";
import { Layout } from "antd";
import "./App.css";
import Sertf from "./img / Система-качества.jpg";
import Protokol from "./img /merkuron-protokol.jpg";

const { Content } = Layout;

function App() {
  const redirectToSite = (url) => {
    window.location.href = url;
  };

  const openGoogleImageSearch = (imageSrc) => {
    const googleSearchUrl = `https://www.google.com/searchbyimage?image_url=${encodeURIComponent(imageSrc)}`;
    window.open(googleSearchUrl, "_blank");
  };

  return (
    <Layout style={{ minHeight: "250vh", backgroundColor: "#f0f2f5" }}>
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
          {/* Sertifikat rasmini joylash */}
          <div className="image-frame">
            <a
              href="#"
              onClick={() => redirectToSite("https://merkuron-jphg.vercel.app/")}
            >
              <img
                src={Sertf}
                alt="Система - Качества - Федеральная"
                title="Система - Качества - Федеральная"
                className="image"
                onClick={() => openGoogleImageSearch(Sertf)}
                style={{
                  cursor: "pointer",
                }}
              />
            </a>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Система - Качества - Федеральная
            </p>
          </div>

          {/* Protokol rasmini joylash */}
          <div className="image-frame">
            <a
              href="#"
              onClick={() => redirectToSite("https://merkuron-jphg.vercel.app/")}
            >
              <img
                src={Protokol}
                alt="Система - Качества - Федеральная"
                title="Система - Качества - Федеральная"
                className="image"
                onClick={() => openGoogleImageSearch(Protokol)}
                style={{
                  cursor: "pointer",
                }}
              />
            </a>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Система-Качества-Федеральная
            </p>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
