import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ModalUpdateProps } from "../../../models/ModalUpdateProps";

export const ModalUpdate: React.FC<ModalUpdateProps> = ({
  name,
  showUpdate,
  handleCloseUpdateModal,
  handleUpdate,
  onChangeName,
}) => {
  return (
    <>
      <Modal show={showUpdate} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Редактировать контакт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <input type="text" value={name} onChange={onChangeName} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdateModal}>
            Отмена
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
