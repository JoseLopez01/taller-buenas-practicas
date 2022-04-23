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

function TaskForm() {
  return (
    <Drawer anchor="right">
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Task Form</Typography>
          <IconButton>
            <Close />
          </IconButton>
        </Stack>
        <FormContainer>
          <form>
            <Stack spacing={3}>
              <Input placeholder="Task" variant="outlined" fullWidth />
              <Input
                placeholder="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
              <DateTimePicker
                label="Fecha/Hora de inicio"
                onChange={() => console.log('')}
                renderInput={(params) => <Input {...params} />}
                value={new Date()}
              />
              <DateTimePicker
                label="Fecha/Hora de fin"
                onChange={() => console.log('')}
                renderInput={(params) => <Input {...params} />}
                value={new Date()}
              />
              <Button size="large" variant="contained" color="success">
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
