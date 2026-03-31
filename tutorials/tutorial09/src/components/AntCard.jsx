import React from "react";
import { Card } from "antd";

export default function AntCard({ name, image_url, description }) {
  return (
    <Card
      title={name}
      cover={<img alt={name} src={image_url} />}
      style={{ width: 300, marginTop: "20px", backgroundColor: "navy" }}
    >
      <p>{description}</p>
    </Card>
  );
}