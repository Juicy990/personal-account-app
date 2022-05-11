import React from "react";
import { Alert, Button } from "react-bootstrap";
import { ErrorLoadMesProps } from "../../../models/ErrorLoadMes";

export const ErrorLoadMes: React.FC<ErrorLoadMesProps> = ({
  showError,
  handleCloseError,
}) => {
  return (
    <div>
      <Alert show={showError} variant="danger">
        <Alert.Heading>Что-то пошло не так</Alert.Heading>
        <span>При загрузке возникла ошибка. Повторите запрос позже.</span>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleCloseError} variant="outline-danger">
            Закрыть
          </Button>
        </div>
      </Alert>
    </div>
  );
};
