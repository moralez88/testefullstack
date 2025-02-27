import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

interface Column {
  id: string;
  label: string;
  format?: (value: any) => string | number;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  title: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  title,
  onEdit,
  onDelete,
}) => {
  return (
    <Paper sx={{ width: '100%', mb: 2, p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="data table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
              {(onEdit || onDelete) && <TableCell align="right">Ações</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    {column.format ? column.format(row[column.id]) : row[column.id]}
                  </TableCell>
                ))}
                {(onEdit || onDelete) && (
                  <TableCell align="right">
                    {onEdit && (
                      <IconButton
                        onClick={() => onEdit(row.id)}
                        color="primary"
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                    )}
                    {onDelete && (
                      <IconButton
                        onClick={() => onDelete(row.id)}
                        color="error"
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataTable;
