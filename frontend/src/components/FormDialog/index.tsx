import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

interface Field {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'multiselect' | 'file';
  options?: { value: string; label: string }[];
  required?: boolean;
}

interface FormDialogProps {
  open: boolean;
  title: string;
  fields: Field[];
  values: Record<string, any>;
  onClose: () => void;
  onSubmit: (values: Record<string, any>) => void;
  onChange: (name: string, value: any) => void;
}

const FormDialog: React.FC<FormDialogProps> = ({
  open,
  title,
  fields,
  values,
  onClose,
  onSubmit,
  onChange,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(values);
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange('file', file);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {fields.map((field) => {
              if (field.type === 'select' || field.type === 'multiselect') {
                return (
                  <FormControl key={field.name} fullWidth>
                    <InputLabel>{field.label}</InputLabel>
                    <Select
                      value={field.type === 'multiselect' ? values[field.name] || [] : values[field.name] || ''}
                      onChange={(e) => onChange(field.name, e.target.value)}
                      multiple={field.type === 'multiselect'}
                      required={field.required}
                      label={field.label}
                    >
                      {field.options?.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                );
              }

              if (field.type === 'file') {
                return (
                  <Box key={field.name}>
                    <Typography variant="subtitle1" gutterBottom>
                      {field.label}
                    </Typography>
                    <input
                      accept="image/*"
                      type="file"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                      id="file-input"
                    />
                    <label htmlFor="file-input">
                      <Button variant="contained" component="span">
                        Upload Imagem
                      </Button>
                    </label>
                    {values.imageUrl && (
                      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                        Imagem atual: {values.imageUrl}
                      </Typography>
                    )}
                  </Box>
                );
              }

              return (
                <TextField
                  key={field.name}
                  fullWidth
                  label={field.label}
                  type={field.type}
                  value={values[field.name] || ''}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  required={field.required}
                />
              );
            })}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type="submit" variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FormDialog;
