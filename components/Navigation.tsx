import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [{
    title: 'Works',
    url: '/'
}, {
    title: 'お問い合わせ',
    url: '',}];



export const ResponsiveAppBar =(props: Props)=> {
   const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <Link href={{ pathname: `${item.url}`}}>
                        <ListItemText primary={item.title} />
                    </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <p className='text-xs'>©タカハシ</p>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',}}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "rgb(71,85,105,0.1)" }} elevation={0}>
        <Toolbar>
          <IconButton
            style={{color:'white'}}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
            {navItems.map((item) => (
                <Button key={item.title} sx={{ color: '#fff'}}>
                    <Link href={{ pathname: `${item.url}`}}>
                        <p className='text-base font-bold'>{item.title}</p>
                   </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
        </AppBar>
    
          
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        

      </Box>
    </Box>
  );
}

