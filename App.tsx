/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  MenuItem,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  Badge
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';

interface Appointment {
  id: string;
  customerName: string;
  serviceType: string;
}

const serviceOptions = [
  { value: 'Lavagem Simples', label: 'Lavagem Simples' },
  { value: 'Lavagem Completa', label: 'Lavagem Completa' },
  { value: 'Lavagem Com Cera', label: 'Lavagem Com Cera' }
];

export default function App() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [serviceType, setServiceType] = useState('');

  useEffect(() => {
    const savedAppointments = localStorage.getItem('appointments');
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const handleAddAppointment = () => {
    if (customerName.trim() && serviceType) {
      const newAppointment: Appointment = {
        id: Date.now().toString() + Math.random().toString(),
        customerName: customerName.trim(),
        serviceType: serviceType
      };
      setAppointments([...appointments, newAppointment]);
      setCustomerName('');
      setServiceType('');
    }
  };

  const handleDeleteAppointment = (idToRemove: string) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== idToRemove
    );
    setAppointments(updatedAppointments);
  };

  const isFormValid = customerName.trim() !== '' && serviceType !== '';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5', fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}>
      <Box component="header" sx={{ bgcolor: '#1976d2', color: 'white', px: 3, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)', zIndex: 10 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'normal' }}>
          Brilho Rápido
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2">Atendimentos</Typography>
          <Badge badgeContent={appointments.length} sx={{ '& .MuiBadge-badge': { bgcolor: '#d32f2f', color: 'white', fontWeight: 'bold' } }}>
            <LocalCarWashIcon sx={{ color: 'white' }} />
          </Badge>
        </Box>
      </Box>

      <Box component="main" sx={{ flex: 1, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '400px 1fr' }, gap: 3, p: 3 }}>
        <Paper sx={{ bgcolor: '#ffffff', borderRadius: 1, boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)', p: 3, display: 'flex', flexDirection: 'column', height: 'fit-content' }}>
          <Typography variant="h6" component="h2" sx={{ fontSize: '1.25rem', fontWeight: 500, mb: 3, color: 'rgba(0, 0, 0, 0.87)' }}>
            Novo Agendamento
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField
              label="Nome do Cliente"
              variant="outlined"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              fullWidth
              sx={{ '& .MuiInputBase-root': { bgcolor: 'transparent' } }}
            />
            <TextField
              select
              label="Tipo de Serviço"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              fullWidth
              sx={{ '& .MuiInputBase-root': { bgcolor: 'transparent' } }}
            >
              {serviceOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button
              variant="contained"
              size="large"
              onClick={handleAddAppointment}
              disabled={!isFormValid}
              sx={{
                mt: 1,
                bgcolor: '#1976d2',
                color: 'white',
                textTransform: 'uppercase',
                fontWeight: 500,
                boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
                '&:hover': { bgcolor: '#1565c0' },
                '&.Mui-disabled': { bgcolor: 'rgba(0, 0, 0, 0.12)', color: 'rgba(0, 0, 0, 0.26)', boxShadow: 'none' }
              }}
            >
              Cadastrar Atendimento
            </Button>
          </Box>
        </Paper>

        <Paper sx={{ bgcolor: '#ffffff', borderRadius: 1, boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)', p: 3, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Typography variant="h6" component="h2" sx={{ fontSize: '1.25rem', fontWeight: 500, mb: 3, color: 'rgba(0, 0, 0, 0.87)' }}>
            Fila de Espera
          </Typography>

          {appointments.length === 0 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'rgba(0, 0, 0, 0.6)' }}>
              <Typography align="center">
                Nenhum carro agendado no momento.
              </Typography>
            </Box>
          ) : (
            <Box sx={{ flex: 1, overflow: 'auto' }}>
              <List disablePadding>
                {appointments.map((appointment, index) => (
                  <ListItem
                    key={appointment.id}
                    sx={{
                      px: 2,
                      py: 1.5,
                      borderBottom: index !== appointments.length - 1 ? '1px solid rgba(0, 0, 0, 0.12)' : 'none',
                    }}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDeleteAppointment(appointment.id)}
                        sx={{
                          color: 'rgba(0, 0, 0, 0.6)',
                          '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)', color: '#d32f2f' }
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={appointment.customerName}
                      secondary={appointment.serviceType}
                      primaryTypographyProps={{ fontSize: '16px', fontWeight: 400, color: 'rgba(0, 0, 0, 0.87)', mb: 0.5 }}
                      secondaryTypographyProps={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.6)' }}
                      sx={{ m: 0 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
}
