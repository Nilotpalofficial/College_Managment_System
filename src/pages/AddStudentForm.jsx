import React, { useState } from "react";
import './css/Student.css';
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const AddStudentForm = () =>{

    const [student, setStudent] = useState({
        name:'',
        fname:'',
        mname:'',
        dob:'',
        mobile:'',
        email:'',
        adhaar:'',
        bgroup:'',
        gender:'',
        rel:'',
        cate:'',
        village:'',
        post:'',
        police:'',
        dist:'',
        state:'',
        pin:'',
        clas:'',
        section:'',
        roll:'',
        session:'',
        adate:'',
        clc:'',
        image:''
    });

    const filedata = (e) =>{
        setStudent({...student, image:e.target.files[0]});
    }

    const filedata1 = (e) =>{
        setStudent({...student, clc: e.target.files[0]});
    }

    const onValueChange = (e) =>{
        setStudent({...student, [e.target.name]: e.target.value});
        console.log(student);
    }
    
    const inputRefName = useRef(null);
    const inputRefFname = useRef(null);
    const inputRefmname = useRef(null);
    const inputRefDob = useRef(null);
    const inputRefMobile = useRef(null);

    const submitData = (e) =>{
        e.preventDefault();
        const{name, fname, mname, dob, mobile, email, adhaar, gender, rel, cate, image, village, post, police, dist, state, pin, clas, section, roll, session, adate, clc} = student;

        if(!name){
            document.getElementById('name').style.display = 'block';
            inputRefName.current.focus();
        }else if(!fname){
            document.getElementById('fname').style.display = 'block';
            inputRefFname.current.focus();
        }else if(!mname){
            document.getElementById('mname').style.display = 'block';
            inputRefmname.current.focus();
        }else if(!dob){
            document.getElementById('dob').style.display = 'block';
            inputRefDob.current.focus();
        }else if(!mobile){
            document.getElementById('mobile').style.display = 'block';
            inputRefMobile.current.focus();
        }else if(mobile.length != 10){
            document.getElementById('validMobile').style.display = 'block';
            inputRefMobile.current.focus();
        }
    }

    return(
        <>
           <div className="container-fluid pt-4 mb-1 whole">
                <div className="row">
                    <div className="col-12">
                        <div className="top_title">
                            <span id="das"><i class="fas fa-tachometer-alt"></i> Student </span><span className="float-right"><NavLink to={'/'}>Home</NavLink><i className="fas fa-angle-right pl-1"></i> <span>Student</span> <i className="fas fa-angle-right pl-1"></i> <span>Add Student </span></span><hr></hr>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="student-form">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 form-title pl-2 pr-2">
                                        <h6 className="pt-3">Personal Details</h6><hr></hr>
                                    </div>
                                </div>

                                <div className="row personal_details">
                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="name" onChange={(e) => onValueChange(e)} ref={inputRefName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                            <p id="name"><i>Please Enter Your Name *</i></p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Father's Name <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="fname" onChange={(e) => onValueChange(e)} ref={inputRefFname} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Father's Name" />
                                            <p id="fname"><i>Please Enter Your Father's Name *</i></p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Mother's Name <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="mname" onChange={(e) => onValueChange(e)} ref={inputRefmname} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Mother's Name" />
                                            <p id="mname"><i>Please Enter Your Mother's Name *</i></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row personal_details">
                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Date Of Birth <span style={{color:'red'}}>*</span></label>
                                            <input type="date" name="dob" onChange={(e) => onValueChange(e)} ref={inputRefDob} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <p id="dob"><i>Please Enter Date Of Birth *</i></p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Mobile Number <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="mobile" onChange={(e) => onValueChange(e)} ref={inputRefMobile}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Mobile" />
                                            <p id="mobile"><i>Please Enter Your Mobile *</i></p>
                                            <p id="validMobile"><i>Enter Your Valid Mobile Number *</i></p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email Id <span style={{color:'red'}}>*</span></label>
                                            <input type="email" name="email" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email With @" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row personal_details">
                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Adhaar Number <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="adhaar" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="1111 2222 3333" />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Blood Group </label>
                                            <input type="text" name="bgroup" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg : A, A+ , A-,B,..." />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Gender <span style={{color:'red'}}>*</span></label>
                                            <select name="gender" onChange={(e) => onValueChange(e)} class="form-control" id="exampleFormControlSelect1">
                                                <option disabled selected value={''}>--Select Gender--</option>
                                                <option value={'male'}>Male</option>
                                                <option value={'female'}>Female</option>
                                                <option value={'other'}>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row personal_details">
                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label for="exampleFormControlSelect1">Religion <span style={{color:'red'}}>*</span></label>
                                                <select name="rel" onChange={(e) => onValueChange(e)} class="form-control" id="exampleFormControlSelect1">
                                                    <option disabled selected value={''}>--Select Religion--</option>
                                                    <option value={'hindu'}>Hindu</option>
                                                    <option value={'islam'}>Islam</option>
                                                    <option value={'sikh'}>SIkh</option>
                                                    <option value={'Other'}>Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Category <span style={{color:'red'}}>*</span></label>
                                            <select name="cate" onChange={(e) => onValueChange(e)} class="form-control" id="exampleFormControlSelect1">
                                                <option disabled selected value={''}>--Select Category--</option>
                                                <option value={'sc/st'}>SC / ST</option>
                                                <option value={'obc/ebc'}>OBC / EBC</option>
                                                <option value={'general'}>General</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Image <span style={{color:'red'}}>*</span> </label>
                                            <input type="file" name="image" onChange={filedata} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  

                        <div className="student-form mt-3">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 form-title pl-2 pr-2">
                                        <h6 className="pt-3">Address</h6><hr></hr>
                                    </div>
                                </div>

                                <div className="row personal_details">
                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Village <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="village" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Village" />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Post Office <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="post" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Post Office" />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Police Station <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="police" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Police Station" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row personal_details">
                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">District <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="dist" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Distrcit" />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">State <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="state" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your State" />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Pin Code <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="pin" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Pin Code" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="student-form mt-3">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 form-title pl-2 pr-2">
                                        <h6 className="pt-3">Admission Details</h6><hr></hr>
                                    </div>
                                </div>
                                <div className="row personal_details">
                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Class <span style={{color:'red'}}>*</span></label>
                                            <select name="clas" onChange={(e) => onValueChange(e)} class="form-control" id="exampleFormControlSelect1">
                                                <option disabled selected value={''}>--Select Your Class--</option>
                                                <option value={'M Tech.'}>M Tech.</option>
                                                <option value={'MCA'}>MCA</option>
                                                <option value={'MSC'}>MSC</option>
                                                <option value={'MA'}>MA</option>
                                                <option value={'M Comm'}>M Comm.</option>
                                                <option value={'MBA'}>MBA</option>
                                                <option value={'B.Tech.'}>B.Tech</option>
                                                <option value={'BCA'}>BCA</option>
                                                <option value={'BBA'}>BBA</option>
                                                <option value={'BSC'}>BSC</option>
                                                <option value={'B.Comm'}>B.Comm</option>
                                                <option value={'BA'}>BA</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Section <span style={{color:'red'}}>*</span></label>
                                            <select name="section" onChange={(e) => onValueChange(e)} class="form-control" id="exampleFormControlSelect1">
                                                <option disabled selected value={''}>--Select Your Section--</option>
                                                <option value={'A'}>A</option>
                                                <option value={'B'}>B</option>
                                                <option value={'C'}>C</option>
                                                <option value={'D'}>D</option>
                                                <option value={'E'}>E</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Roll Number <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="roll" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Roll Number" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row personal_details">
                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Session <span style={{color:'red'}}>*</span></label>
                                            <input type="text" name="session" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg: 2020 - 24" />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Admission Date <span style={{color:'red'}}>*</span></label>
                                            <input type="date" name="adate" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">CLC <span style={{color:'red'}}>*</span></label>
                                            <input type="file" name="clc" onChange={filedata1} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                        <div className="row mt-3 mb-5">
                            <div className="col-12">
                                <div className="submit-btn">
                                    <input type="reset" value={'Reset'} className="mr-2"></input>
                                    <button onClick={submitData}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStudentForm