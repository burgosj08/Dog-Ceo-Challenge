import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MainLayouts } from "../../layouts/MainLayouts";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <MainLayouts>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <img
          alt="example"
          style={{ objectFit: "contain", width: "50%" }}
          src="./assets/sadDog.gif"
        />

        <Button
          style={{
            marginTop: "24px",
            border: "1px solid #1D1680",
            width: "50%",
            color: "#1D1680",
          }}
          onClick={() => navigate("/")}
        >
          Volver
        </Button>
      </div>
    </MainLayouts>
  );
};
