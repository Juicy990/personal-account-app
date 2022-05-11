import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Button } from "react-bootstrap";
import "./AccountInfo.css";

export const AccountInfo: React.FC = () => {
  const { logout, user, isAuthenticated } = useAuth0();

  const handleClick = (): void => {
    logout();
  };

  return (
    <>
      {isAuthenticated && (
        <div className="account-info">
          <Card>
            <Card.Body>
              <Card.Text>
                <span>Имя профиля:</span> {user?.name}
              </Card.Text>
              <Card.Text>
                <span>Email:</span> {user?.email}
              </Card.Text>
              <div className="btn">
                <Button variant="primary" onClick={handleClick}>
                  Выйти
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};
