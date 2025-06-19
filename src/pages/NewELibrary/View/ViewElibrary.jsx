import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
   Description, Event, AccountBalance,
  AttachMoney, AccessTime, Receipt, HelpOutline,
  LibraryBooks, Update, Folder, MenuBook
} from '@mui/icons-material';
import GavelTwoToneIcon from '@mui/icons-material/GavelTwoTone';
import FeedTwoToneIcon from '@mui/icons-material/FeedTwoTone';
import {
  Box, Container, Grid, Typography, Paper,
  createTheme, ThemeProvider
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom theme with your color
const theme = createTheme({
  palette: {
    primary: {
      main: '#013879',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const LibraryButton = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius * 2,
  cursor: 'pointer',
  transition: theme.transitions.create(
    ['transform', 'box-shadow', 'background-color', 'color'],
    { duration: theme.transitions.duration.standard }
  ),
  minHeight: 120,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.contrastText,
    }
  },
}));

const ViewElibrary = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: "Acts", path: "/elibrary/View/Acts", icon: <GavelTwoToneIcon style={{fontSize:'30px'}} /> },
    { label: "Rules", path: "/elibrary/View/Rules", icon: <Description style={{fontSize:'30px'}} /> },
    { label: "Labour Forms", path: "/elibrary/View/Labour_Forms", icon: <Receipt style={{fontSize:'30px'}} /> },
    { label: "National Holidays", path: "/elibrary/View/National_&_Festival_Holidays", icon: <Event style={{fontSize:'30px'}} /> },
    { label: "Labour Welfare Fund", path: "/elibrary/View/Labour_Welfare_Fund", icon: <AccountBalance style={{fontSize:'30px'}} /> },
    { label: "Minimum Wages", path: "/elibrary/View/Minimum_Wages", icon: <AttachMoney style={{fontSize:'30px'}} /> },
    { label: "Working Hours", path: "/elibrary/View/Working_Hours_&_leave_Rules", icon: <AccessTime style={{fontSize:'30px'}} /> },
    { label: "Professional Tax", path: "/elibrary/View/Professional_Tax", icon: <FeedTwoToneIcon style={{fontSize:'30px'}} /> },
    { label: "Compliance Q&A", path: "/elibrary/View/Compliance", icon: <HelpOutline style={{fontSize:'30px'}} /> },
    { label: "Policy Templates", path: "/elibrary/View/Policy_Templates", icon: <Folder style={{fontSize:'30px'}} /> },
    { label: "Legal Updates", path: "/elibrary/View/Recent_Legal_Updates", icon: <Update style={{fontSize:'30px'}} /> },
    { label: "General", path: "/elibrary/View/Others", icon: <MenuBook style={{fontSize:'30px'}} /> },
  ];

  return (
    <div className="dashboard_wrapper" style={{
      background: '#f8fafc',
      padding: '10px 20px 40px 20px',
      maxWidth:'calc(180vh - 80px)',
      marginLeft:'245px',
      // minHeight: 'calc(100vh - 80px)',
    }}>
      <ThemeProvider theme={theme}>
        <Box sx={{
          backgroundColor: 'background.default',
          py: 1,
          // minHeight: 'calc(100vh - 64px)',
      // maxHeight: 'calc(70vh - 80px)'

        }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
              sx={{
                textAlign: 'center',
                fontWeight: 600,
                color: 'primary.main',
                mb: 6
              }}
              style={{textDecoration:'underline'}}
            >
              E-Library Sections
            </Typography>

            <Grid container spacing={4}>
              {buttons.map((btn, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3}  key={index}>
                  <LibraryButton elevation={2} onClick={() => navigate(btn.path)} style={{padding:'none !important', border:'2px solid #013879'}} >
                    <Box 
                    sx={{
                      color: 'primary.main',
                      border:'primary.main',
                      mb: 2,
                      '& .MuiSvgIcon-root': {
                        fontSize: '2.5rem'
                      },
                    }}
                    
                    >
                      {btn.icon}
                    </Box>
                    <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600 }}>
                      {btn.label}
                    </Typography>
                  </LibraryButton>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </ThemeProvider></div>
  );
};

export default ViewElibrary;