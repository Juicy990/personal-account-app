import React, { useState } from "react";
import { UserInterface } from "../../../models/UserInterface";
import { UserItemProps } from "../../../models/UserItemProps";
import { Button } from "react-bootstrap";
import { ModalUpdate } from "../../modal/modalUpdate/ModalUpdate";
import { ModalRemove } from "../../modal/modalRemove/ModalRemove";
import "./UserItem.css";

export const UserItem: React.FC<UserItemProps> = ({ user, remove, update }) => {
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [showRemove, setShowRemove] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const handleCloseUpdateModal = (): void => setShowUpdate(false);
  const handleShowUpdateModal = (): void => setShowUpdate(true);

  const handleCloseRemoveModal = (): void => setShowRemove(false);
  const handleShowRemoveModal = (): void => setShowRemove(true);

  const handleRemove = (): void => {
    remove(user);
    setShowRemove(false);
  };
  const handleUpdate = (): void => {
    if (name.length !== 0) {
      update({ ...user, name } as UserInterface);
    }
    setShowUpdate(false);
  };
  const onChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };

  return (
    <>
      <div className="user">
        {user.name}
        <div className="user-buttons">
          <Button
            variant="success"
            className="user-buttons__success"
            onClick={handleShowUpdateModal}
          >
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button
            variant="danger"
            className="user-buttons__danger"
            onClick={handleShowRemoveModal}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </div>
      <div className="user-modals">
        <ModalUpdate
          name={name}
          showUpdate={showUpdate}
          handleCloseUpdateModal={handleCloseUpdateModal}
          handleUpdate={handleUpdate}
          onChangeName={onChangeName}
        />
        <ModalRemove
          showRemove={showRemove}
          handleCloseRemoveModal={handleCloseRemoveModal}
          handleRemove={handleRemove}
        />
      </div>
    </>
  );
};
