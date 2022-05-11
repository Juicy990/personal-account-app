import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ModalRemoveProps } from "../../../models/ModalRemoveProps";

export const ModalRemove: React.FC<ModalRemoveProps> = ({
  showRemove,
  handleCloseRemoveModal,
  handleRemove,
}) => {
  return (
    <>
      <Modal show={showRemove} onHide={handleCloseRemoveModal}>
        <Modal.Header closeButton>
          <Modal.Title>Удалить контакт</Modal.Title>
        </Modal.Header>
        <Modal.Body>Вы действительно хотите удалить контакт?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRemoveModal}>
            Отмена
          </Button>
          <Button variant="primary" onClick={handleRemove}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
