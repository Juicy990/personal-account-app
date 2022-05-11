import React, { useState } from "react";
import { userApi } from "../../../services/UserService";
import { Card } from "react-bootstrap";
import { UserInput } from "../UserInput/UserInput";

import "./UserSearch.css";

export const UserSearch: React.FC = () => {
  const [filtered, setFiltered] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { user } = userApi.useFetchAllUsersQuery(100, {
    selectFromResult: ({ data: users }) => ({
      user: users?.find((user) => user.name === filtered),
    }),
  });

  const handleClick = (): void => {
    setFiltered(name);
    setName("");
  };

  const onChangeInputValue = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setName(event.currentTarget.value);
  };

  return (
    <>
      <div className="user-filter">
        <UserInput
          title="Поиск по имени"
          value={name}
          onChange={onChangeInputValue}
          onClick={handleClick}
        />
      </div>

      <div className="user-info">
        <Card>
          <Card.Body>
            <Card.Title>Результат поиска:</Card.Title>
            <Card.Text>
              <div>
                <span>Имя:</span> {user?.name}
              </div>
              <div>
                <span>Id:</span> {user?.id}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
