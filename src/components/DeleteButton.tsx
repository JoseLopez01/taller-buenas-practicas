import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

export interface DeleteButtonProps {
  onClick?: () => void;
}

function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <IconButton onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteButton;
