import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { Task } from '../interfaces/interfaces';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useCollectionContext } from '../contexts/CollectionContext';

const Container = styled(Box)(({ theme }) => ({
  width: theme.spacing(45),
  margin: theme.spacing(2, 2),
}));

const FormContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const Input = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline:': {
    borderColor: theme.palette.text.primary,
  },
}));

export interface TaskFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = Pick<Task, 'description' | 'name'> & {
  startDate: string;
  endDate: string;
};

const INITIAL_FORM_DATA: FormData = {
  description: '',
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  name: '',
};

function TaskForm({ isOpen, onClose }: TaskFormProps) {
  const [form, setForm] = useState<FormData>(INITIAL_FORM_DATA);
  const { addTaskToCollection } = useCollectionContext();

  const { description, endDate, name, startDate } = form;

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null
  ) => {
    if (e) {
      const { name, value } = e.target;
      setForm((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleOnStartDateChange = (date: Date | null) => {
    if (date) {
      setForm((prevState) => ({ ...prevState, startDate: date.toISOString() }));
    }
  };

  const handleOnEndDateChange = (date: Date | null) => {
    if (date) {
      setForm((prevState) => ({ ...prevState, endDate: date.toISOString() }));
    }
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task = {
      description,
      endDate,
      name,
      startDate,
    };
    await addTaskToCollection(task);
    setForm(INITIAL_FORM_DATA);
    onClose();
  };

  return (
    <Drawer anchor="right" open={isOpen}>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Task Form</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Stack>
        <FormContainer>
          <form onSubmit={handleOnSubmit}>
            <Stack spacing={3}>
              <Input
                placeholder="Task"
                variant="outlined"
                fullWidth
                name="name"
                value={name}
                onChange={handleOnChange}
              />
              <Input
                placeholder="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="description"
                value={description}
                onChange={handleOnChange}
              />
              <DateTimePicker
                label="Fecha/Hora de inicio"
                renderInput={(params) => <Input {...params} />}
                value={startDate}
                InputProps={{
                  name: 'startDate',
                }}
                onChange={handleOnStartDateChange}
              />
              <DateTimePicker
                label="Fecha/Hora de fin"
                renderInput={(params) => <Input {...params} />}
                value={endDate}
                InputProps={{
                  name: 'endDate',
                }}
                onChange={handleOnEndDateChange}
              />
              <Button
                size="large"
                variant="contained"
                color="success"
                type="submit"
              >
                Save
              </Button>
            </Stack>
          </form>
        </FormContainer>
      </Container>
    </Drawer>
  );
}

export default TaskForm;
