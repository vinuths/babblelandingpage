import React, { useState, useEffect, useContext } from 'react';
import {styled} from '@mui/material';
import Point from './Point.css'
import {getNotification , fetchNotifications} from "../../store/actions/otherActions";

import Menu from '@mui/icons-material/Menu';
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BusinessIcon from '@mui/icons-material/Business';
import GradingIcon from '@mui/icons-material/Grading'; //this can also be audit
import CategoryIcon from '@mui/icons-material/Category';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../hide.css';
import { useDispatch,useSelector } from 'react-redux';
import {logoutUser} from '../../store/actions/authActions';
import logo from '../../../src/logo.svg'
import Logo11 from '../../../src/Logo11.jpeg'

import Checklist from '../../../src/Checklist.png'
import Lisereg from '../../../src/Lisereg.png'
import { Modal } from 'antd';
import { Button, Input, Space, Table ,Form} from 'antd';
// import NotificationList from './NotificationList';

const drawerWidth = 200;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});


const formatDate = (currentDate) => {
  const dates = new Date(currentDate);
  const year = dates.getFullYear();
  const month = String(dates.getMonth() + 1).padStart(2, '0');
  const date = String(dates.getDate()).padStart(2, '0');
  const hours = String(dates.getHours()).padStart(2, '0');
  const minutes = String(dates.getMinutes()).padStart(2, '0');
  const seconds = String(dates.getSeconds()).padStart(2, '0');
  const formattedDateTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  return (formattedDateTime);
}


const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAdmin,setIsAdmin] = useState();
  const [updateId,setUpdateId] = useState();
  const [imageLoggedInUrl,setImageLoggedInUrl] = useState();
  const userLogin = useSelector(state=>state.userLogin);
  const {userInfo} = userLogin;
  const [name, setName] = useState('');
  const [userId, setUserid] = useState('');
  const getttingNotification = useSelector((state) => state.getttingNotification);
  const { loading, notificationInfo,error } = getttingNotification;
  console.log(notificationInfo);
  const [username, setUsername] = useState('');
  const [selectedDiv, setSelectedDiv] = useState(null);
  const notificationList = useSelector((state) => state.notificationList);
  const { loading1, notificationInfos,error1 } = notificationList;
  // const { loading1, notificationInfos,error1 } = notificationList;
  // console.log("notificationList",notificationList);
  console.log("notificationInfos",notificationInfos);

  const badgeNotification = {
      backgroundColor:'white'
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const onChengBgColor = (id) => {
    setSelectedDiv(id);
  };
  

  const [dataSource, setDataSource] = useState();
  const [dataSource1, setDataSource1] = useState();

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const toggleDialog = () => {
    setIsDialogVisible(!isDialogVisible);
    };
    const notificationInfoCount11 = notificationInfos?.length ? notificationInfos?.length : 0;

    const isLoggedIn = useSelector(state => state.userLogin); // Replace with your actual selector for login state

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchNotifications());
      console.log("dispatch", dispatch);
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    const lomo = notificationInfos;
    console.log("lomo", lomo);

    if (lomo?.length > 0) {
      let notificationArr1 = [];
      lomo.forEach((item, index) => {
        console.log("item", item); // Add this log to check each item
        notificationArr1.push({
          key: index + 1,
          id: item._id,
          title: item.title,
          act: item.act,
          rule: item.rule,
          question: item.question,
          daysLeft: item.daysLeft,
          startDate: new Date(item.startDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            }),
              dueDate: new Date(item.dueDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
              // questionDoc: (
          //   <a
          //     href={item.questionDoc}
          //     target="_blank"
          //     rel="noopener noreferrer"
          //   >
          //     Document
          //   </a>
          // ),
          // docattachment: (
          //   <a
          //     href={item.docattachment}
          //     target="_blank"
          //     rel="noopener noreferrer"
          //   >
          //     File
          //   </a>
          // ),
        });
      });
      console.log("notificationArr1", notificationArr1);
      setDataSource1(notificationArr1);
    }
  }, [notificationInfos]);
///side bar drawer code start



const itemsListNotLoggedIn = [
  {
      text: "Dashboard",
      icon: <HomeIcon onClick={(e) => onDashboard(e)}/>,
      className: "pointer-cursor",
      onClick: (e) => onDashboard(e)
  },
  // {
  //     text: "Compliances",
  //     icon: <ListAltIcon onClick={(e) => onCompliances(e)}/>,
  //     className: "pointer-cursor",
  //     onClick: (e) => onCompliances(e)
  // },
  {
      text: "Compliances",
      icon: <img src={Checklist} alt="My Image" onClick={(e) => onChecklist(e)} style={{paddingTop:'2px'}}/>,
      className: "pointer-cursor",
      // <CollectionsBookmarkIcon onClick={(e) => onChecklist(e)}/>,
      onClick: (e) => onChecklist(e)
  },
  // {
  //     text: "Audit",
  //     icon: <ManageAccountsIcon onClick={(e) => onAudit(e)}/>,
  //     onClick: (e) => onAudit(e)
  // },
  // {
  //     text: "Companies",
  //     icon: <BusinessIcon onClick={(e) => onCompany(e)}/>,
  //     onClick: (e) => onCompany(e)
  // },
  // {
  //     text: "Users",
  //     icon: <PeopleAltIcon onClick={(e) => onUserRegister(e)}/>,
  //     onClick: (e) => onUserRegister(e)
  // },
  // {
  //     text: "Category",
  //     icon: <CategoryIcon onClick={(e) => onCategory(e)}/>,
  //     onClick: (e) => onCategory(e)
  // },
  {
      text: "E-Library",
      icon: <LocalLibraryIcon onClick={(e) => onElibrary(e)}/>,
      className: "pointer-cursor",
      onClick: (e) => onElibrary(e)
  },
  {
      text: "Notification",
      icon: <NotificationsNoneIcon onClick={(e) => onNotification(e)}/>,
      className: "pointer-cursor",
      onClick: (e) => onNotification(e)
  }
  ,
  {
      text: "Lise/Regs",
      icon: <img src={Lisereg} alt="My Image" onClick={(e) => onLisereg(e)} />,
      className: "pointer-cursor",
      onClick: (e) => onLisereg(e)
  }
];

    const onLogin = (e) => {
        navigate('/login');
        // handleDrawerClose();
    }
    const onCategory = (e) => {
        navigate('/category');
        // handleDrawerClose();
    }
    const onUserRegister = (e) => {
        navigate('/usercreate');
        // handleDrawerClose();
    }
    const onElibrary = (e) => {
        navigate('/elibrary');
        // handleDrawerClose();
    }
    const onNotification = (e) => {
        navigate('/notification');
        // handleDrawerClose();
    }
    const onLisereg = (e) => {
        navigate('/licsregs');
        // handleDrawerClose();
    }    
    const onCompliances = (e) => {
        navigate('/compliances');
        // handleDrawerClose();
    }
    const onAudit = (e) => {
        navigate('/audit');
        // handleDrawerClose(); 
    }
    const onCompany = (e) => {
        navigate('/company');
        // handleDrawerClose(); onCompany
    }
    const onChecklist = (e) => {
        navigate('/checklist');
        // handleDrawerClose();
    }
    const onDashboard = (e) => {
        navigate("/dashboard")

        // handleDrawerClose();
    }

    ///side bar drawer code end
    const onLogout = async (e) => {
      Modal.confirm({
        title: "Are you sure, you want to Logout?",
        okText: "Yes",
        okType: "danger",
        onOk: () => {
          setOpen(false);
          dispatch(logoutUser());
          }
        });
    }


    const notificationInfoCount = notificationInfo?.length?notificationInfo?.length:0;
  // useEffect(()=>{
  //   dispatch(getNotification());
  // },[dispatch])
  // useEffect(()=>{
  //   let notificationArr = [];
  //   if (notificationInfo?.length > 0) {
  //       notificationInfo.map((item, index) => {
  //           notificationArr.push({
  //           key: index+1,
  //           id: item._id,
  //           label: item.label,
  //           dates:formatDate(item.dates)
  //         })
  //     });
  //   }
  //   setDataSource(notificationArr); 
  // },[notificationInfo])
    useEffect(() => {
        const saved = localStorage.getItem("userInfo");
        //setting up values to hide all navbar urls which are not necessory after login
        if(saved){
            const initialValue = JSON.parse(saved);
        // alert(JSON.stringify(initialValue))
            //for updating navbar conents after login getting content in userId
            if(initialValue)
            {
            setOpen(true);  
            setUserid(saved);
            setUpdateId(initialValue._id);
            setName(initialValue.name);
            /* setImageLoggedInUrl(initialValue.image.url); *///image url from cloudinary cloud from localStorage
            // Promise.resolve(getUserById(initialValue._id)).then((result)=>setImageLoggedInUrl(result.data.Image.url));
            }
        }
    },[userInfo]);
    useEffect(() => {
        if(!userInfo){
            setUserid('');
            setOpen(false);
            navigate("/");
    }
    },[userInfo])

    const columns = [
      {
      title: <div style={{ fontWeight:'bold',textAlign:'left' }}>Notifications({notificationInfoCount11})</div>,
      children: [
          // {
          // // title: 'Label',
          // dataIndex: 'Id',
          // key: 'id',
          // dataIndex: 'id',

          // width: 30,
          // // ...getColumnSearchProps('label'),
          // // sorter: (a, b) => a.label.length - b.label.length,
          // // sortDirections: ['descend', 'ascend']
          // },
          {
              title: 'Audit Title',
              dataIndex: 'title',
              key: 'title',
              width: 40,
              // ...getColumnSearchProps('createdAt'),
              // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
              // sortDirections: ['descend', 'ascend']
          }, 
          {
            title: 'Act',
            dataIndex: 'act',
            key: 'act',
            width: 40,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        }, 
        {
          title: 'Rule',
          dataIndex: 'rule',
          key: 'rule',
          width: 40,
          // ...getColumnSearchProps('createdAt'),
          // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
          // sortDirections: ['descend', 'ascend']
      }, 
        {
          title: 'Question',
          dataIndex: 'question',
          key: 'question',
          width: 40,
          // ...getColumnSearchProps('createdAt'),
          // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
          // sortDirections: ['descend', 'ascend']
      }, 
        {
          title: 'Days Left',
          dataIndex: 'daysLeft',
          key: 'daysLeft',
          width: 40,
          // ...getColumnSearchProps('createdAt'),
          // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
          // sortDirections: ['descend', 'ascend']
      }, 
        {
          title: 'Start Date',
          dataIndex: 'startDate',
          key: 'startDate',
          width: 40,
          // ...getColumnSearchProps('createdAt'),
          // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
          // sortDirections: ['descend', 'ascend']
      }, 
        {
          title: 'Due Date',
          dataIndex: 'dueDate',
          key: 'dueDate',
          width: 40,
          // ...getColumnSearchProps('createdAt'),
          // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
          // sortDirections: ['descend', 'ascend']
      }, 
          // {
          //     title: 'Reset Date',
          //     dataIndex: 'updatedAt',
          //     key: 'updatedAt',
          //     width: 70,
          //     ...getColumnSearchProps('updatedAt'),
          //     sorter: (a, b) => a.updatedAt.length - b.updatedAt.length,
          //     sortDirections: ['descend', 'ascend']
          // }
          ],
      },
    ];
    return (
      
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} style={{ backgroundColor:'white',color:'#000'}}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                // edge="start"
                style={{ pointerEvents: `${!userId ? "none" : ""}`, cursor: `${!userId ? "not-allowed" : ""}` }}
                sx={{
                marginRight: 0,
                ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon disabled="disabled"/>
            </IconButton>
            {/* <Typography variant='h5' component="div" sx={{ flexGrow: 1 }} style={{ backgroundColor:'white',color:'#000' }}>MES</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            
            <NavLink>
        <button
          type="button"
          className="icon-button"
          style={{ marginLeft: '1000px', position: 'fixed' }}
          onClick={toggleDialog}
        >
          <span className="material-icons">notifications</span>
          <span className="icon-button__badge">{notificationInfoCount11}</span>
        </button>
      </NavLink>
      <Modal
        title=""
        visible={isDialogVisible}
        onCancel={toggleDialog}
        width={1200}
        style={{
          position:'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-65%, -50%)',
          // height: '456px',
        }}
        footer={[
          <Button key="close" onClick={toggleDialog}>
            Close
          </Button>,
        ]}
      >
        <React.Fragment>
      <Table columns={columns} dataSource={dataSource1} style={{ overflow:'-moz-hidden-unscrollable' }} pagination={{ pageSize: 10, showSizeChanger: false,position: ["bottomCenter"] }}  scroll={{ x: 1000}} />
      {/* Notification Count: {notificationInfoCount11} */}
      {/* {dataSource1.map((notification) => (
      <div className="notification-box">
        <div className="notification-item" key={notification.id}>
          <h4>{notification.title}</h4>
          <p>Act: {notification.act}</p>
          <p>Rule: {notification.rule}</p>
          <p>Question: {notification.question}</p>
          <p>Days Left: {notification.daysLeft}</p>
          <p>Start Date: {notification.startDate}</p>
          <p>Due Date: {notification.dueDate}</p>
          Uncomment and use these if needed
          <p>
            Question Doc: <a href={notification.questionDoc} target="_blank" rel="noopener noreferrer">Document</a>
          </p>
          <p>
            Attachment: <a href={notification.docattachment} target="_blank" rel="noopener noreferrer">File</a>
          </p>
         
        </div>
    </div>
      ))} */}
  </React.Fragment>
   
        
      </Modal>
                    <NavLink position="fixed" style={{ color: '#000', marginLeft: '1030px',position: 'fixed' }} onClick={(e) => onLogout(e)} className={`${!userId ? "mystyle" : ""}`} ><button type="button" class="logout-button" style={{ marginLeft: '1000px',position: 'fixed'}}><LogoutIcon /></button></NavLink>
                    
                    <NavLink style={{ color: '#000' }} to="/" className={`${userId ? "mystyle" : ""}`} ><button type="button" class="login-button" style={{ marginLeft: '1000px',position: 'fixed'}}><LoginIcon /></button></NavLink>
                    {/* <NavLink style={{ color: 'white' }} to="/register" className={`${userId ? "mystyle" : ""}`} >Register</NavLink> */}
            </Toolbar>
        </AppBar>
    {userId ?  <Drawer variant="permanent" open={open}>
            <DrawerHeader>
            <img src={Logo11} alt="My Image" style={{marginLeft:'5px',marginTop:'-5px',width:'100px',height:'100px'}}/>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
            {userId && itemsListNotLoggedIn.map((item, index) => {
                 const { text, icon, onClick } = item;
                 return (<><ListItem key={text}  onClick={(e) => {onClick(e);}} style={{ width:'190px',paddingTop:'0px',paddingBottom:'0px'}}>
                               {icon && <ListItemIcon  onClick={(e) => {onChengBgColor(index+1)}} style={{borderRadius:'0.200rem',paddingLeft:'15px',width:'10px', paddingTop:'5px',paddingBottom:'5px',color: selectedDiv === (index+1) ? 'white' : '#000',backgroundColor: selectedDiv === (index+1) ? '#013879' : 'white',}} onMouseOver={(e) => {onChengBgColor(index+1)}} sx={{borderRadius:'0.200rem',paddingLeft:'15px',width:'10px', paddingTop:'5px',paddingBottom:'5px',color: selectedDiv === (index+1) ? 'white' : '#000',backgroundColor: selectedDiv === (index+1) ? '#013879' : 'white',}}>{icon}
                                        </ListItemIcon>}
                                <div onMouseOver={(e) => {onChengBgColor(index+1)}} sx={{borderRadius:'0.200rem',paddingLeft:'15px', paddingTop:'5px',paddingBottom:'5px',color: selectedDiv === (index+1) ? 'white' : '#000',backgroundColor: selectedDiv === (index+1) ? '#013879' : 'white',}}>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} onClick={(e) => {onChengBgColor(index+1)}} style={{ borderRadius:'0.200rem',paddingLeft:'15px',paddingTop:'5px',paddingBottom:'5px',width:'120px',  marginLeft: '-20px',backgroundColor: selectedDiv === (index+1) ? '#013879' : 'white',color: selectedDiv === (index+1) ? 'white' : '#000'}} /></div>
                        
                </ListItem></>
                )})}
            </List>
            <Divider />
        </Drawer>: ''}
        </Box>
  );
}
export default Navbar;