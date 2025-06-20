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
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const LibraryButton = styled(Paper)(({ theme }) => ({
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
  minHeight: 100,
  minWidth: 140,
  maxWidth: 260,
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
    { label: "Acts", path: "/elibrary/View/Acts", icon: <GavelTwoToneIcon sx={{ fontSize: 30 }} /> },
    { label: "Rules", path: "/elibrary/View/Rules", icon: <Description sx={{ fontSize: 30 }} /> },
    { label: "Labour Forms", path: "/elibrary/View/Labour_Forms", icon: <Receipt sx={{ fontSize: 30 }} /> },
    { label: "National Holidays", path: "/elibrary/View/National_&_Festival_Holidays", icon: <Event sx={{ fontSize: 30 }} /> },
    { label: "Labour Welfare Fund", path: "/elibrary/View/Labour_Welfare_Fund", icon: <AccountBalance sx={{ fontSize: 30 }} /> },
    { label: "Minimum Wages", path: "/elibrary/View/Minimum_Wages", icon: <AttachMoney sx={{ fontSize: 30 }} /> },
    { label: "Working Hours", path: "/elibrary/View/Working_Hours_&_leave_Rules", icon: <AccessTime sx={{ fontSize: 30 }} /> },
    { label: "Professional Tax", path: "/elibrary/View/Professional_Tax", icon: <FeedTwoToneIcon sx={{ fontSize: 30 }} /> },
    { label: "Compliance Q&A", path: "/elibrary/View/Compliance", icon: <HelpOutline sx={{ fontSize: 30 }} /> },
    { label: "Policy Templates", path: "/elibrary/View/Policy_Templates", icon: <Folder sx={{ fontSize: 30 }} /> },
    { label: "Legal Updates", path: "/elibrary/View/Recent_Legal_Updates", icon: <Update sx={{ fontSize: 30 }} /> },
    { label: "General", path: "/elibrary/View/Others", icon: <MenuBook sx={{ fontSize: 30 }} /> },
  ];

  return (
    <div className="dashboard_wrapper" style={{
      background: '#F8FAFC',
      padding: '10px 20px 40px 20px',
      maxWidth: 'calc(180vh - 80px)',
      marginLeft: '245px',
    }}>
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: 'background.default', py: 1 }}>
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
              style={{ textDecoration: 'underline' }}
            >
              E-Library Sections
            </Typography>
            <Grid container spacing={4}>
              {buttons.map((btn, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <LibraryButton elevation={2} onClick={() => navigate(btn.path)} sx={{ border: '2px solid #013879' }}>
                    <Box sx={{
                      color: 'primary.main',
                      mb: 2,
                      '& .MuiSvgIcon-root': { fontSize: '2.5rem' },
                    }}>
                      {btn.icon}
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {btn.label}
                    </Typography>
                  </LibraryButton>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>

      <Box mt={6} px={1}>
        <Typography variant="caption" sx={{
          fontStyle: 'italic',
          fontSize: '10px',
          color: 'gray',
          textAlign: 'justify',
          whiteSpace: 'pre-wrap',
        }}>
          <span style={{ fontWeight: '600', color: '#013879' }}>Disclaimer</span>
          {"\n"}The content published on this website is provided by Matrix HR Technologies Pvt. Ltd. for general informational purposes only. While we make every effort to ensure the information is accurate, complete, and up-to-date, we make no representations or warranties of any kind—express or implied—about the reliability, suitability, availability, or accuracy of the information, services, or related graphics contained on the website.
          {"\n"}Any reliance you place on such information is strictly at your own risk. Matrix HR Technologies Pvt. Ltd. will not be liable for any loss or damage, including indirect or consequential loss, arising out of, or in connection with, the use of this website or the information provided.
          {"\n"}For questions, suggestions, or to report inaccuracies, please contact us at support@matrixhrtech.com.
          {"\n\n"}<span style={{ fontWeight: '600', color: '#013879' }}>Copyright Notice
          © Matrix HR Technologies Pvt. Ltd. All rights reserved.</span>
          {"\n"}All content on this website—including text, graphics, logos, icons, images, audio clips, digital downloads, and software—is the property of Matrix HR Technologies Pvt. Ltd. or its content suppliers and is protected by applicable copyright and intellectual property laws.
          {"\n"}Unauthorized reproduction, distribution, or modification of any part of this website, in whole or in part, is strictly prohibited without prior written permission from Matrix HR Technologies Pvt. Ltd.
        </Typography>
      </Box>
    </div>
  );
};

export default ViewElibrary;
