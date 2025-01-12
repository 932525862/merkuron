import React, { useEffect, useRef } from "react";
import { Layout } from "antd";
import "./App.css"; // CSS faylini import qilamiz
import Sertf from "./img /merkuron-sertifikar.jpg";
import Protokol from "./img /merkuron-protokol.jpg"

const { Content } = Layout;

function App() {
  const imgRef = useRef(null); // img elementiga murojaat qilish uchun `useRef`

  useEffect(() => {
    // O'ng tugma (context menu) ni bloklash
    const handleContextMenu = (e) => e.preventDefault();

    // Rasmni sudrab olib chiqishni bloklash
    const handleDragStart = (e) => e.preventDefault();

    document.addEventListener("contextmenu", handleContextMenu);

    if (imgRef.current) {
      imgRef.current.addEventListener("dragstart", handleDragStart);
    }

    // Cleanup funksiyasi
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);

      if (imgRef.current) {
        imgRef.current.removeEventListener("dragstart", handleDragStart);
      }
    };
  }, []);

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
            flexDirection: "column", // Elementlarni vertikal joylash
            gap: "80px", // Elementlar orasidagi bo'shliq
          }}
        >
          <div className="image-frame">
            <img
              ref={imgRef} // img elementini `ref` bilan bog'laymiz
              src={Sertf}
              alt="Merkuron"
              className="image"
              style={{
                pointerEvents: "none", // CSS orqali rasmni tanlanmaslikni ta'minlash
              }}
            />
          </div>

          <div className="image-frame">
            <img
              ref={imgRef} // img elementini `ref` bilan bog'laymiz
              src={Protokol}
              alt="Merkuron"
              className="image"
              style={{
                pointerEvents: "none", // CSS orqali rasmni tanlanmaslikni ta'minlash
              }}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
