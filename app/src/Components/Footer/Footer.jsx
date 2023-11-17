import  "./Footer.css";
import React from "react";
export const footer = () =>{
    return(
        <footer class=" site-footer bg-dark text-white pt-4 pb-5">
            <div class="container text-center text-md-left">
                <div class="row text-center text-md-left">
                    <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h4 class=" mb-4 font-weight-400 color-white">Feedback</h4>
                        <p  style={{color:"gray"}}><a href="#">Your Opinion Matters!</a></p>
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h4 class="mb-4 font-weight-400 color-white">Useful links</h4>
                        <p>
                            <a href="#">Terms of Service</a>
                        </p>
                        <p>
                            <a href="#">Privacy Policy</a>
                        </p>
                        <p>
                            <a href="#" >Developer Student Clubs</a>
                        </p>
                        <p>
                            <a href="#"  >Google Developers Program</a>
                        </p>
                        <p>
                            <a href="#" >Machine Learning</a>
                        </p>
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h4 class=" mb-4 font-weight-400 color-white">Contact Us</h4>
                        <p style={{color:"gray"}} >
                            <i class="fa fa-home mr-2"></i>Silicon Insitute Of Technology,Bhubaneswar
                        </p>
                        <p style={{color:"gray"}}>
                            <i class="fa fa-envelope mr-2"></i>Email-<a href="#" > team@dscsitbbsr.org</a>
                        </p>
                    </div>
                </div>
                <br />
                <hr class="mb-4 "/>
                <div class="row align-items-center">
                    <div class="col-md-7 col-lg-8">
                        <p >| Copyright &copy;2023 All rights reserved | </p>
                    </div>

                    <div class="col-md-5 col-lg-4">
                        <div class="text-center text-md-right">
                            <ul class="list-unstyled list-inline"><p>Connect With Us:</p>
                                <li class="list-inline-item">
                                    <a href="#" class="btn-floatng btn-sm text-white" style={{fontSize:"25px"}}><i class="fab fa-facebook"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="btn-floatng btn-sm text-white" style={{fontSize:"25px"}}><i class="fab fa-twitter"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="btn-floatng btn-sm text-white" style={{fontSize:"25px"}}><i class="fab fa-github"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="btn-floatng btn-sm text-white" style={{fontSize:"25px"}}><i class="fab fa-google-plus"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="btn-floatng btn-sm text-white" style={{fontSize:"25px"}}><i class="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
export default footer