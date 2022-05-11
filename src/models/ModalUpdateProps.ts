export interface ModalUpdateProps {
  name: string;
  showUpdate: boolean;
  handleCloseUpdateModal: () => void;
  handleUpdate: () => void;
  onChangeName: (event: React.FormEvent<HTMLInputElement>) => void;
}
