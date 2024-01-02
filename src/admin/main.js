import { observer } from 'mobx-react-lite';
import BusinessDetails from './businessDetails';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import storeBusiness from '../store/business'
import Login from './login';

const Main=observer(() =>{
  if (!storeBusiness.isAdmin) {
    return (
      <>
      <Login></Login>
      
      </>
    )
  }
  else {
    return (
      <>
       
        <BusinessDetails></BusinessDetails>
        <Link to={'/admin/meeting'}><Button variant="contained" sx={{backgroundColor:"#41e6a6",marginTop:"30px",margin:'2%'}}>meeting</Button></Link>
        <Link to={'/admin/service'}><Button variant="contained" sx={{backgroundColor:"#41e6a6",marginTop:"30px",margin:'2%'}}>services</Button></Link>
        <br/>
        <Outlet />
      </>
    )
  }
})
export default Main;