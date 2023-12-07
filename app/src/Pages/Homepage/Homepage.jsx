import "./Homepage.css"
import event1 from "./images/1673504707267.png"
import project1 from "./images/662-6621239_isys-free-business-solutions-assessment-vector-images-business.png"
export const Homepage = () =>{
  return(
    <div class="site">
        <div className="upper_part overlay" id="home">
       <div class="container">
          <div class="row align-items-center justify-content-center">
              <div class="col-md-6" id="home1">
                
              </div>
              <div class="col-md-6" id="home2">
                  <h1>Developer Student Clubs</h1>
                  <div>
                  <a class="typeform-share button btn" href="https://tally.so#tally-open=wbj9Q2&amp;tally-layout=modal&amp;tally-width=700&amp;tally-emoji-text=👋&amp;tally-emoji-animation=wave">Apply for Membership</a>
                  </div>
              </div>
          </div>
       </div>
    </div>
    <div class="box">
        <div class="middle_part yt_image" id="about">
          <div class="container">
              <div class="row">
                <div class="col-md-7" id="about1">
                    <iframe src="https://www.youtube.com/embed/wTLe8nwJ_Lw"></iframe>
                </div>
                <div class="col-md-5" id="about2">
                <p>Developer Student Club (DSC) is a Google Developers
                   program for university students to learn mobile and web 
                   development skills. The club will be open to any student, 
                   ranging from novice developers who are just starting, to 
                   advanced developers who want to further their skills. The 
                   club is intended as a space for students to try out new 
                   ideas and collaborate to solve mobile and web development 
                   problems</p>.
                </div>
              </div>
          </div>

        </div>
        <a href="/events">
          <marquee>
          <span>Events Coming Soon</span>
          <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/devfest%20poster.png" alt="gdsc" />
                  <img src="https://pbs.twimg.com/media/FifX22YVUAAPkTM.jpg" alt="gdsc" />
                  <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Orientation-gdsc%20%282%29.png" alt="gdsc" />
                  <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/20230922_232642_0000.png" alt="gdsc" />
                  <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/launching%20date-01.jpg" alt="gdsc" />
        </marquee>
        </a>
    </div>
    <section class="project_section" id="project">
        <div class="container">
          <div class="row">
              <div class="col-md-6">
                <div class="card" id="event" >
                  <a href="/events">
                    <img class="images" src={event1}>

                    </img>
                    <div class="event_content">
                      <h3>Events</h3>
                      <p style={{color:"black"}}>DSC SIT BBSR has organised a number of workshops
                        , fun events and meetups with students in and around SIT BBSR to promote learning and developer skills among 
                        themselves.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card" id="projects" >
                  <a href="/projects">
                    <img class="images" src={project1}>

                    </img>
                    <div class="event_content">
                      <h3>Projects</h3>
                      <p style={{color:"black"}}>DSC SIT BBSR has organised a number of workshops
                        , fun events and meetups with students in and around SIT BBSR to promote learning and developer skills among 
                        themselves.</p>
                    </div>
                  </a>
                </div>
              </div>
          </div>
        </div>
    </section>
    <section style={{textAlign:"center",marginTop:"40px"}}>
          <h3>Sponsers</h3>
          <a href="https://www.coca-colacompany.com/" style={{textAlign:"center"}}>
              <img  src="https://pbs.twimg.com/profile_images/1615430137926778882/AybyflyO_400x400.jpg" style={{width:"200px",textAlign:"center"}}/>
          </a>
    </section>
    <section>
      <div class="sit">
        <h2>Where to Find Us?</h2>
      </div>
      <div class="location">
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7481.6090619184215!2d85.80742104232787!3d20.34969221845048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1701608935466!5m2!1sen!2sin" style={{border:"0",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",width:"100%",height:"450px"}}  ></iframe>
      </div>
    </section>
    <section class="last_part" id="contact">
      <div class>
        <div class="head_logo">
          <img style={{textAlign:"center"}}  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/small-logo.png" style={{width:"100px"}}/>
        </div>
        <div class="row" style={{paddingLeft:"140px",paddingRight:"140px"}}>
          <div class="col-md-4 icon">
            <a href="https://github.com/Abhinav-2004/gdsc-official-site-frontend"><i class="fab fa-facebook" style={{fontSize:"48px"}} ></i></a>
          </div>
          <div class="col-md-4 icon">
            <a href="https://github.com/Abhinav-2004/gdsc-official-site-frontend"><i class="fab fa-twitter" style={{fontSize:"48px"}} ></i></a>
          </div>
          <div class="col-md-4 icon">
            <a href="https://github.com/Abhinav-2004/gdsc-official-site-frontend"><i class="fab fa-linkedin" style={{fontSize:"48px"}} ></i></a>
          </div>
          <div class="col-md-4 icon">
            <a href="https://github.com/Abhinav-2004/gdsc-official-site-frontend"><i class="fab fa-instagram" style={{fontSize:"48px"}} ></i></a>
          </div>
          <div class="col-md-4 icon">
            <a href="https://github.com/Abhinav-2004/gdsc-official-site-frontend"><i class="fab fa-github" style={{fontSize:"48px"}} ></i></a>
          </div>
          <div class="col-md-4 icon">
            <a href="https://github.com/Abhinav-2004/gdsc-official-site-frontend"><i class="fab fa-medium" style={{fontSize:"48px"}} ></i></a>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
export default Homepage
