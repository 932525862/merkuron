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
    <Layout style={{ minHeight: "240vh", backgroundColor: "#f0f2f5" }}>
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
              href="https://merkuron-jphg.vercel.app/static/media/%20%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0.067e9dea591dd04939dc.jpg"
              onClick={() => redirectToSite("https://www.merkuron.com/")}
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
              href="https://merkuron-jphg.vercel.app/static/media/%20%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0.067e9dea591dd04939dc.jpg"
              onClick={() => redirectToSite("https://www.merkuron.com/")}
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
