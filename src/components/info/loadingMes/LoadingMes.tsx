import React from "react";
import { Spinner } from "react-bootstrap";
import "./LoadingMes.css";

export const LoadingMes: React.FC = () => {
  return (
    <div className="loading-mes">
      <span>Идет загрузка...</span>{" "}
      <Spinner animation="border" variant="primary" />
    </div>
  );
};
