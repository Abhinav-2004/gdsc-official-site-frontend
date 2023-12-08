import styles from "./Team.module.css"
import manu from "./Images/IMG_0328.png"
import loria from "./Images/Loria.png"
import kittu from "./Images/kittu.png"
import ashu from "./Images/ashu.jpg"
import dharma from "./Images/dharma.png"
import richa from "./Images/IMG-20231119-WA0014.jpg"
export const Team = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>MEET OUR TEAM</h1>
                <p>Web Team</p>
            </div>
            <div className={styles.main1}>
                <div className={styles.team_wrap}>
                    <div className={styles.team_member}>
                        <div className={styles.team_img}>
                            <img src={kittu}/>
                            <div className={styles.overlay}>
                                <div className={styles.team_details}>
                                    <p>GDSC WEB LEAD</p>
                                    <div className={styles.socials}>
                                        <a href="#"><span class="fab fa-facebook"></span></a>
                                        <a href="#"><span class="fab fa-github"></span></a>
                                        <a href="#"><span class="fab fa-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <h6 className={styles.team_title}>ABHINAV SINGH</h6>
                            <span style={{color:"gray"}}>Web developer</span>
                    </div>
                </div>
                <div className={styles.team_wrap}>
                    <div className={styles.team_member}>
                        <div className={styles.team_img}>
                            <img src={manu}/>
                            <div className={styles.overlay}>
                                <div className={styles.team_details}>
                                    <p>CORE MEMBER</p>
                                    <div className={styles.socials}>
                                        <a href="#"><span class="fab fa-facebook"></span></a>
                                        <a href="#"><span class="fab fa-github"></span></a>
                                        <a href="https://www.linkedin.com/in/sreedharam-manohar-9bb893234/"><span class="fab fa-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <h6 className={styles.team_title}>S.MANOHAR</h6>
                            <span style={{color:"gray"}}>Web developer</span>
                    </div>
                </div>
                <div className={styles.team_wrap}>
                    <div className={styles.team_member}>
                        <div className={styles.team_img}>
                            <img src={richa}/>
                            <div className={styles.overlay}>
                                <div className={styles.team_details}>
                                    <p>CORE MEMBER</p>
                                    <div className={styles.socials}>
                                        <a href="#"><span class="fab fa-facebook"></span></a>
                                        <a href="#"><span class="fab fa-github"></span></a>
                                        <a href="#"><span class="fab fa-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <h6 className={styles.team_title}>RICHA</h6>
                            <span style={{color:"gray"}}>Web developer</span>
                    </div>
                </div>
                <div className={styles.team_wrap}>
                    <div className={styles.team_member}>
                        <div className={styles.team_img}>
                            <img src={loria}/>
                            <div className={styles.overlay}>
                                <div className={styles.team_details}>
                                    <p>CORE MEMBER</p>
                                    <div className={styles.socials}>
                                        <a href="#"><span class="fab fa-facebook"></span></a>
                                        <a href="#"><span class="fab fa-github"></span></a>
                                        <a href="#"><span class="fab fa-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <h6 className={styles.team_title}>LORIA MANJARI GARTIA</h6>
                            <span style={{color:"gray"}}>Web developer</span>
                    </div>
                </div>

                <div className={styles.team_wrap}>
                    <div className={styles.team_member}>
                        <div className={styles.team_img}>
                            <img src={ashu}/>
                            <div className={styles.overlay}>
                                <div className={styles.team_details}>
                                    <p>CORE MEMBER</p>
                                    <div className={styles.socials}>
                                        <a href="#"><span class="fab fa-facebook"></span></a>
                                        <a href="#"><span class="fab fa-github"></span></a>
                                        <a href="#"><span class="fab fa-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <h6 className={styles.team_title}>ASHUTOSH</h6>
                            <span style={{color:"gray"}}>Web developer</span>
                    </div>
                </div>

                <div className={styles.team_wrap}>
                    <div className={styles.team_member}>
                        <div className={styles.team_img}>
                            <img src={dharma}/>
                            <div className={styles.overlay}>
                                <div className={styles.team_details}>
                                    <p>CORE MEMBER</p>
                                    <div className={styles.socials}>
                                        <a href="#"><span class="fab fa-facebook"></span></a>
                                        <a href="#"><span class="fab fa-github"></span></a>
                                        <a href="#"><span class="fab fa-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <h6 className={styles.team_title}>DHARMARAJ</h6>
                            <span style={{color:"gray"}}>Web developer</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Team