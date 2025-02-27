import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid, CircularProgress } from '@mui/material';
import { getDashboardMetrics } from '../../services/api';

interface DashboardData {
  totalOrders: number;
  averageOrderValue: number;
  totalRevenue: number;
}

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DashboardData>({
    totalOrders: 0,
    averageOrderValue: 0,
    totalRevenue: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDashboardMetrics();
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Total de Pedidos
            </Typography>
            <Typography variant="h3">{data.totalOrders}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Valor Médio
            </Typography>
            <Typography variant="h3">
              {`R$ ${data.averageOrderValue.toFixed(2)}`}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Receita Total
            </Typography>
            <Typography variant="h3">
              {`R$ ${data.totalRevenue.toFixed(2)}`}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Gráfico de Vendas
            </Typography>
            <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography color="text.secondary">
                {loading ? <CircularProgress size={20} /> : 'Dados não disponíveis'}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
