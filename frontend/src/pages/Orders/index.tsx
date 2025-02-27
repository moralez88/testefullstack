import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Button, CircularProgress } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import DataTable from '../../components/DataTable';
import { getOrders } from '../../services/api';

interface Order {
  _id: string;
  date: string;
  total: number;
  productIds: string[];
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const columns = [
    {
      id: 'date',
      label: 'Data',
      format: (value: string) => new Date(value).toLocaleDateString('pt-BR'),
    },
    {
      id: 'total',
      label: 'Total',
      format: (value: number) => `R$ ${value.toFixed(2)}`,
    },
    {
      id: 'productIds',
      label: 'Qtd. Produtos',
      format: (value: string[]) => value.length,
    },
  ];

  const handleEdit = (id: string) => {
    console.log('Edit order:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete order:', id);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Pedidos
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {}}
        >
          Novo Pedido
        </Button>
      </Box>
      <Paper sx={{ p: 2 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
            <CircularProgress />
          </Box>
        ) : orders.length > 0 ? (
          <DataTable
            columns={columns}
            data={orders.map(order => ({ id: order._id, ...order }))}
            title="Lista de Pedidos"
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <Box sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography color="text.secondary">
              Nenhum pedido cadastrado
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Orders;
