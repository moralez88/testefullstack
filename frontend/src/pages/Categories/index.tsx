import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Button, CircularProgress } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import DataTable from '../../components/DataTable';
import { getCategories } from '../../services/api';

interface Category {
  _id: string;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const columns = [
    { id: 'name', label: 'Nome' },
  ];

  const handleEdit = (id: string) => {
    console.log('Edit category:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete category:', id);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Categorias
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {}}
        >
          Nova Categoria
        </Button>
      </Box>
      <Paper sx={{ p: 2 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
            <CircularProgress />
          </Box>
        ) : categories.length > 0 ? (
          <DataTable
            columns={columns}
            data={categories.map(cat => ({ id: cat._id, ...cat }))}
            title="Lista de Categorias"
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <Box sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography color="text.secondary">
              Nenhuma categoria cadastrada
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Categories;
