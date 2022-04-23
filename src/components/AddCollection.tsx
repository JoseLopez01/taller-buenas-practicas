import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';

import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';

import { useCollectionContext } from '../contexts/CollectionContext';

type FormSubmit = FormEvent<HTMLFormElement>;
type TextFieldChange = ChangeEvent<HTMLInputElement>;
type TextFieldFocus = FocusEvent<HTMLInputElement>;

function AddCollection() {
  const [collection, setCollection] = useState<string>('Add new collection');
  const { addCollection } = useCollectionContext();

  const handleOnSubmit = (event: FormSubmit) => {
    event.preventDefault();
    addCollection(collection);
    setCollection('Add new collection');
  };

  const handleOnChange = (event: TextFieldChange) => {
    setCollection(event.target.value);
  };

  const handleOnFocus = (event: TextFieldFocus) => {
    event.target.select();
  };

  const handleOnBlur = (event: TextFieldFocus) => {
    if (event.target.value === '') {
      setCollection('Add new collection');
    }
  };

  return (
    <ListItem disablePadding sx={{ paddingX: 2 }}>
      <form onSubmit={handleOnSubmit} autoComplete="off">
        <TextField
          fullWidth
          size="small"
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={collection}
        />
      </form>
    </ListItem>
  );
}

export default AddCollection;
