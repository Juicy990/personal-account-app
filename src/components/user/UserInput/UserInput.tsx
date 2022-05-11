import React from "react";
import { Button } from "react-bootstrap";

import { UserInputProps } from "../../../models/UserInputProps";

export const UserInput: React.FC<UserInputProps> = ({
  title,
  value,
  onChange,
  onClick,
}) => {
  return (
    <>
      <div>{title}:</div>
      <div className="user-form">
        <input
          type="text"
          placeholder="Введите имя..."
          value={value}
          onChange={onChange}
        />
        {value.length === 0 && (
          <Button variant="primary" type="submit" onClick={onClick} disabled>
            Готово
          </Button>
        )}
        {value.length > 0 && (
          <Button variant="primary" type="submit" onClick={onClick}>
            Готово
          </Button>
        )}
      </div>
    </>
  );
};
