import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Button, CircularProgress } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import DataTable from '../../components/DataTable';
import { getProducts } from '../../services/api';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const columns = [
    { id: 'name', label: 'Nome' },
    { id: 'description', label: 'Descrição' },
    {
      id: 'price',
      label: 'Preço',
      format: (value: number) => `R$ ${value.toFixed(2)}`,
    },
  ];

  const handleEdit = (id: string) => {
    console.log('Edit product:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete product:', id);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Produtos
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {}}
        >
          Novo Produto
        </Button>
      </Box>
      <Paper sx={{ p: 2 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
            <CircularProgress />
          </Box>
        ) : products.length > 0 ? (
          <DataTable
            columns={columns}
            data={products.map(prod => ({ id: prod._id, ...prod }))}
            title="Lista de Produtos"
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <Box sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography color="text.secondary">
              Nenhum produto cadastrado
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Products;
