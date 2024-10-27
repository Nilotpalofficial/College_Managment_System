import React from "react";
import './css/Sidebar.css';
import { NavLink } from "react-router-dom";

const img = '../image/logo_new.png';

const Sidebar = () =>{

    const Show = () =>{
        if(document.getElementById('submenu').style.display === 'block'){
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu').style.display = 'block';
            document.getElementById('drop').className = 'fas fa-angle-down';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
        }
    }

    const Show1 = () =>{
        if(document.getElementById('submenu1').style.display === 'block'){
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu1').style.display = 'block';
            document.getElementById('drop1').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
        }
    }

    const Show2 = () =>{
        if(document.getElementById('submenu2').style.display === 'block'){
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu2').style.display = 'block';
            document.getElementById('drop2').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
        }
    }

    const Show3 = () =>{
        if(document.getElementById('submenu3').style.display === 'block'){
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu3').style.display = 'block';
            document.getElementById('drop3').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
        }
    }

    const Show4 = () =>{
        if(document.getElementById('submenu4').style.display === 'block'){
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu4').style.display = 'block';
            document.getElementById('drop4').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
        }
    }

    const Show5 = () =>{
        if(document.getElementById('submenu5').style.display === 'block'){
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu5').style.display = 'block';
            document.getElementById('drop5').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
        }
    }

    const Show6 = () =>{
        if(document.getElementById('submenu6').style.display === 'block'){
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu6').style.display = 'block';
            document.getElementById('drop6').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
        }
    }

    const Show7 = () =>{
        if(document.getElementById('submenu7').style.display === 'block'){
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu7').style.display = 'block';
            document.getElementById('drop7').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
            document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
        }
    }

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 m-0 p-0">
                        <div className="sidebar">
                            <div className="sidebar-top">
                                <img src={img} alt={img} className="img-fluid"></img>
                            </div>

                            <div id="sidebar-bottom">
                                <nav>
                                    <NavLink to={'/'} className={'nav mt-3'} id="active"><i class="fas fa-tachometer-alt"></i> Dashboard</NavLink>
                                    <NavLink to={''} className={'nav'} onClick={Show}><i class="far fa-user"></i> Student <i id="drop" className="fas fa-angle-right"></i></NavLink>


                                    <div id="submenu">
                                        <NavLink to={'/pages/AddStudent'} className={'sub-nav'}><i class="far fa-circle"></i> Add Student</NavLink>
                                        <NavLink to={'/pages/ViewStudent'} className={'sub-nav'}><i class="far fa-circle"></i> View Student</NavLink>
                                    </div>

                                    <NavLink to={''} className={'nav'} onClick={Show1}><i class="far fa-user"></i> Teacher <i id="drop1" className="fas fa-angle-right"></i></NavLink>
                                    
                                    <div id="submenu1">
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> Add Teacher</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> View Teacher</NavLink>
                                    </div>

                                    <NavLink to={''} className={'nav'} onClick={Show2}><i class="far fa-user"></i> Staff <i id="drop2" className="fas fa-angle-right"></i></NavLink>

                                    <div id="submenu2">
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> Add Staff</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> View Staff</NavLink>
                                    </div>

                                    <NavLink to={''} className={'nav'} onClick={Show3}><i class="fas fa-bus"></i> Transport <i id="drop3" className="fas fa-angle-right"></i></NavLink>

                                    <div id="submenu3">
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> Add Transport</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> View Transport</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> Running Status</NavLink>
                                    </div>

                                    <NavLink to={''} className={'nav'}><i class="fas fa-table"></i> Attendance</NavLink>
                                    <NavLink to={''} className={'nav'} onClick={Show4}><i class="far fa-bookmark"></i> Course <i id="drop4" className="fas fa-angle-right"></i></NavLink>

                                    <div id="submenu4">
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> Add Course</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> View Course</NavLink>
                                    </div>

                                    <NavLink to={''} className={'nav'} onClick={Show5}><i class="fas fa-book"></i> Syllabus <i id="drop5" className="fas fa-angle-right"></i></NavLink>

                                    <div id="submenu5">
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> Add Syllabus</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> View Syllabus</NavLink>
                                    </div>

                                    <NavLink to={''} className={'nav'} onClick={Show6}><i class="far fa-copy"></i> Exam <i id="drop6" className="fas fa-angle-right"></i></NavLink>

                                    <div id="submenu6">
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> Add Exam & Schedule</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> View All Type Exam</NavLink>
                                    </div>

                                    <NavLink to={''} className={'nav'} onClick={Show7}><i class="far fa-calendar-alt"></i> Result <i id="drop7" className="fas fa-angle-right"></i></NavLink>

                                    <div id="submenu7">
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> Enter Marks</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> view Marks</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="far fa-circle"></i> View Result</NavLink>
                                    </div>

                                    <NavLink to={''} className={'nav'}><i class="fas fa-rupee-sign"></i> Payment <i id="drop8" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to={''} className={'nav'}><i class="fas fa-globe-africa"></i> Website</NavLink>
                                    <NavLink to={''} className={'nav'}><i class="far fa-copy"></i> Certificate <i id="drop9" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to={''} className={'nav'}><i class="fas fa-book"></i> Library <i id="drop10" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to={''} className={'nav'}><i class="far fa-calendar-alt"></i> Admission <i id="drop11" className="fas fa-angle-right"></i></NavLink>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar