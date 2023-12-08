import "./Footer1.css"
export const Footer1 = () =>{
    return (
        <div className="footer">
            <div className="container">
            <div className="first_half">
                <div className="one">
                    <h4 style={{fontSize:"1.7rem"}}>Feedback</h4>
                    <br/>
                    <a href="#">Your Opinion Matters!</a>
                </div>
                <br/>
                <div className="two">
                    <h4 style={{fontSize:"1.7rem"}}>Useful Links</h4>
                    <br/>
                            <a href="#">Terms of Service</a>
                            <br/>
                            <a href="#">Privacy Policy</a>
                            <br/>
                        
                            <a href="#" >Developer Student Clubs</a>
                            <br/>
                            <a href="#"  >Google Developers Program</a>
                            <br/>
                        
                            <a href="#" >Machine Learning</a>
                </div>
                <br/>
                <div className="three">
                    <h4 style={{fontSize:"1.7rem"}}>Contact Us</h4>
                    <br/>
                    <a style={{color:"white"}}>
                    <i className="fas fa-home"></i> Silicon Insitute Of Technology,Bhubaneswar
                    </a>
                    <br/>
                    <a href="#" ><i className="fas fa-envelope"></i> Email- team@dscsitbbsr.org</a>
                </div>
                <br/>
            </div>
            <br/>
           
        
            <div className="second_half">
                <p style={{color:"white"}}>|Copyright &copy;{new Date().getFullYear()} All rights reserved|</p>
                
            </div>
            <br/>
            <div className="third_half">
                <h4>Connect With Us:</h4>
                <a href="#"><span class="fab fa-facebook"></span></a>
                <a href="#"><span class="fab fa-github"></span></a>
                <a href="#"><span class="fab fa-linkedin"></span></a>
                <a href="#"><span class="fab fa-instagram"></span></a>
            </div>
            </div>    
        </div>
    )
}
export default Footer1