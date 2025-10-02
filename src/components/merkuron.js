import React from "react";
import { Layout, Button } from "antd";
import img from "../img/merkuron.jpg";
import m1 from "../img/m1.png";
import m2 from "../img/m2.png";
import m3 from "../img/m3.png";
import m4 from "../img/m4.png";
import maqola from "../img/maqola.pdf";
import "../App.css";

const { Content } = Layout;

function Merkuron() {
  

  return (
    <Layout style={{ minHeight: "100%", backgroundColor: "#f0f2f5" }}>
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
            gap: "20px",
            alignItems: "center",
          }}
        >
          <div className="image-frame">
            <img
              src={m1}
              alt="Komilov Abdulloh"
              title="Komilov Abdulloh"
              className="image"
              
              style={{
                cursor: "pointer",
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <img
              src={m2}
              alt="Komilov Abdulloh"
              title="Komilov Abdulloh"
              className="image"
             
              style={{
                cursor: "pointer",
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <img
              src={m3}
              alt="Komilov Abdulloh"
              title="Komilov Abdulloh"
              className="image"
              
              style={{
                cursor: "pointer",
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <img
              src={m4}
              alt="Komilov Abdulloh"
              title="Komilov Abdulloh"
              className="image"
             
              style={{
                cursor: "pointer",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>

          {/* Maqolani yuklab olish tugmasi */}
          <Button
  type="primary"
  href={maqola}
  download="maqola.pdf"
  style={{
    backgroundColor: "#1890ff",
    borderColor: "#1890ff",
    width: "220px",   // eni
    height: "35px",  // bo‘yi
    fontSize: "15px", // matn kattaligi
    fontWeight: "bold"
  }}
>
  Maqolani yuklab olish
</Button>

        </div>
      </Content>
    </Layout>
  );
}

export default Merkuron;
