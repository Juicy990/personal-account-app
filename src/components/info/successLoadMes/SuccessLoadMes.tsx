import React from "react";
import { Alert, Button } from "react-bootstrap";
import { SuccessLoadMesProps } from "../../../models/SuccessLoadMesProps";

export const SuccessLoadMes: React.FC<SuccessLoadMesProps> = ({
  showSuccess,
  handleCloseSuccess,
}) => {
  return (
    <div>
      <Alert show={showSuccess} variant="success">
        <Alert.Heading>Успешно</Alert.Heading>
        <span>Запрос выполнен успешно</span>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleCloseSuccess} variant="outline-success">
            Закрыть
          </Button>
        </div>
      </Alert>
    </div>
  );
};
