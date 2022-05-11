import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Button } from "react-bootstrap";
import "./LogInBlock.css";
import { LoadingMes } from "../../info/loadingMes/LoadingMes";

export const LogInBlock: React.FC = () => {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
  const handleClick = (): void => {
    loginWithRedirect();
  };
  return (
    <>
      {isLoading && (
        <div className="login-loading">
          <LoadingMes />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <Container fluid="sm" className="container">
          <h2>Авторизуйтесь для входа в приложение:</h2>
          <div className="login-btn">
            <Button variant="primary" onClick={handleClick}>
              Войти
            </Button>
          </div>
        </Container>
      )}
    </>
  );
};
