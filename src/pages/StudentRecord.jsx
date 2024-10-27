import React from "react";
import './css/Student.css';
import { NavLink } from "react-router-dom";

const StudentRecord = () =>{
    return(
        <>
           <div className="container-fluid pt-4 mb-1 whole">
                <div className="row">
                    <div className="col-12">
                        <div className="top_title">
                            <span id="das"><i class="fas fa-tachometer-alt"></i> Student </span><span className="float-right"><NavLink to={'/'}>Home</NavLink><i className="fas fa-angle-right pl-1"></i> <span>Student</span> <i className="fas fa-angle-right pl-1"></i> <span>View Student </span></span><hr></hr>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="student-form">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 col-md-8 form-title pl-2 pr-2">
                                        <h6 className="pt-3">All Student Record</h6>
                                    </div>
                                    <div className="col-12 col-md-4 form-title pl-2 pr-2">
                                        <div className="search">
                                            <div class="form-group">
                                                <input type="search" name="clc" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search ..." />
                                            </div>
                                        </div>
                                    </div>
                                </div><hr></hr>

                                <div className="row personal_details">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="record-table pl-3 pr-3">
                                                <table className="table table-responsive">
                                                    <thead>
                                                        <tr>
                                                            <th>Sno</th>
                                                            <th>Name</th>
                                                            <th>Father's Name</th>
                                                            <th>Mobile Number</th>
                                                            <th>Date Of Birth</th>
                                                            <th>Address</th>
                                                            <th>Class</th>
                                                            <th>Roll No.</th>
                                                            <th>Sec.</th>
                                                            <th>Admission Date</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentRecord