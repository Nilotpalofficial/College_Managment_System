import React from "react";
import Sidebar from "./Sidebar";
import './css/Main.css';
import { NavLink } from "react-router-dom";
import Body from "./Body";


const Main = () =>{

    const envelope = 'icons/email.png';
    const bell = 'icons/bell.png';
    const avtar = 'icons/avtar.jpg';
    const user = 'icons/user.png';
    const setting = 'icons/settings.png';

    const User = () =>{
        if(document.getElementById('user').style.display === 'block'){
            document.getElementById('user').style.display = 'none';
        }else{
            document.getElementById('user').style.display = 'block';
        }
    }

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-2 m-0 p-0">
                        <Sidebar />
                    </div>

                    <div className="col-12 col-md-10 m-0 p-0">
                        <div className="top_header">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <div className="search-area">
                                            <div class="form-group">
                                                <input type="search" class="form-control" id="exampleInputEmail1" placeholder="Search..." aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-8">
                                        <div className="icons d-flex">
                                            <span><img src={envelope} alt={envelope} height={'20px'} width={'20px'}></img></span>
                                            <span><img src={bell} alt={bell} height={'20px'} width={'20px'}></img></span>
                                            <span onClick={User}><img  className="avtar" src={avtar} alt={avtar} height={'50px'} width={'50px'}></img></span>

                                            <div id="user">
                                                <NavLink to={''} className={'user-nav'}>
                                                    <span><img src={user} alt={user} height={'15px'} width={'15px'}></img>Hello Ashraf</span>
                                                </NavLink>
                                                <NavLink to={''} className={'user-nav'}>
                                                    <span><img src={user} alt={user} height={'15px'} width={'15px'}></img>My Profile</span>
                                                </NavLink>
                                                <NavLink to={''} className={'user-nav'}>
                                                    <span><img src={setting} alt={setting} height={'15px'} width={'15px'}></img> Setting</span>
                                                </NavLink>
                                                <NavLink to={''} className={'user-nav'}>
                                                    <span style={{color: '#e11414', paddingLeft:'3px', fontSize:'14px'}}><i class="fas fa-sign-out-alt" style={{color: '#e11414'}}></i> <span style={{paddingLeft:'5px'}}>Logout</span></span>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    {/*body part start here */}
                        <Body />
                    {/*body part end here */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main