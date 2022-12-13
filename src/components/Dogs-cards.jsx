import { Card, Divider, Spin } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const DogsCards = ({ element }) => {
  const [image, setImage] = useState();

  const randomNumber = parseInt(1 + Math.random() * (5 - 1));

  const getImages = async () => {
    const { data } = await axios.get(
      `https://dog.ceo/api/breed/${element}/images`
    );

    setImage(data.message[randomNumber] ?? data.message[0]);
  };
  useEffect(() => {
    getImages();
  }, [element]);

  return (
    <div>
      <Card
        className="animate-fade"
        title={element.toUpperCase().replace("/", " - ")}
        style={{
          marginBottom: "10px",
          border: "1px solid #B5B8C1",
        }}
      >
        {image ? (
          <img
            alt="example"
            style={{ height: "200px", width: "100%", objectFit: "cover" }}
            src={image}
          />
        ) : (
          <div className="text-center">
            <Spin size="large" />
          </div>
        )}

        <Divider />

        <span style={{ color: "#555D71" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in,
          enim ex molestias exercitationem.
        </span>
      </Card>
    </div>
  );
};
