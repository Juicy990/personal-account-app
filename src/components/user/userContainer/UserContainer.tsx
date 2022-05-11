import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserInterface } from "../../../models/UserInterface";
import { userApi } from "../../../services/UserService";
import { UserItem } from "../userItem/UserItem";
import { UserSearch } from "../userSearch/UserSearch";
import { UserInput } from "../UserInput/UserInput";
import { LoadingMes } from "../../info/loadingMes/LoadingMes";
import { ErrorFetchMes } from "../../info/errorFetchMes/ErrorFetchMes";
import { ErrorLoadMes } from "../../info/errorLoadMes/ErrorLoadMes";
import { SuccessLoadMes } from "../../info/successLoadMes/SuccessLoadMes";
import { Container, ListGroup } from "react-bootstrap";
import "./UserContainer.css";

export const UserContainer: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const [name, setName] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const { data: users, error, isLoading } = userApi.useFetchAllUsersQuery(100);
  const [createUser, { isLoading: isCreateLoading }] =
    userApi.useCreateUserMutation();
  const [updateUser, { isLoading: isUpdateLoading }] =
    userApi.useUpdateUserMutation();
  const [removeUser, { isLoading: isRemoveLoading }] =
    userApi.useRemoveUserMutation();

  const handleCloseError = (): void => setShowError(false);
  const handleShowError = (): void => setShowError(true);
  const handleCloseSuccess = (): void => setShowSuccess(false);
  const handleShowSuccess = (): void => setShowSuccess(true);

  const handleRemove = (user: UserInterface): void => {
    removeUser(user)
      .unwrap()
      .then(() => handleShowSuccess())
      .catch(() => handleShowError());
  };

  const handleUpdate = (user: UserInterface): void => {
    updateUser(user)
      .unwrap()
      .then(() => handleShowSuccess())
      .catch(() => handleShowError());
  };

  const handleClick = async (): Promise<void> => {
    if (name.length !== 0) {
      await createUser({ name, body: name } as UserInterface)
        .unwrap()
        .then(() => handleShowSuccess())
        .catch(() => handleShowError());
    }
    setName("");
  };

  const onChangeInputValue = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setName(event.currentTarget.value);
  };

  const loadMes =
    isCreateLoading || isUpdateLoading || isRemoveLoading || isLoading;

  return (
    <>
      {isAuthenticated && (
        <Container fluid="sm">
          {error && <ErrorFetchMes />}
          {loadMes && <LoadingMes />}
          <div className="user-alerts">
            <SuccessLoadMes
              showSuccess={showSuccess}
              handleCloseSuccess={handleCloseSuccess}
            />
            <ErrorLoadMes
              showError={showError}
              handleCloseError={handleCloseError}
            />
          </div>
          <div className="user-list">
            <ListGroup>
              {users &&
                users.map((user) => (
                  <ListGroup.Item variant="light">
                    <UserItem
                      key={user.id}
                      user={user}
                      update={handleUpdate}
                      remove={handleRemove}
                    />
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </div>
          {!error && !loadMes && (
            <>
              <div className="user-add">
                <UserInput
                  title="Добавить контакт"
                  value={name}
                  onChange={onChangeInputValue}
                  onClick={handleClick}
                />
              </div>
              <div className="user-filter">
                <UserSearch />
              </div>
            </>
          )}
        </Container>
      )}
    </>
  );
};
