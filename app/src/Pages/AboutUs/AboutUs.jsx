import './AboutUs.css'
import {motion} from 'framer-motion';

export default function AboutUs(){
    const fadeIn={
        hidden: {opacity: 0},
        visible: {opacity: 1},
    };
    return(
        <>
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col items-center p-4 my-2">
            <div className="flex flex-col items-center p-4 my-2">
                <h1 className="text-2xl font-semibold text-center" style ={{color:"#393646" }}>
                        ABOUT US
                </h1>

                <div className="pt-2 mb-8 text-center">
                    <h2 className="text-xl font-semibold" style={{color: "#4F4557"}}>Empowering the Next Generation of Tech Leaders: Welcome to <strong className='text-2xl'>SIT x GDSC</strong></h2>
                    <p className="mx-4 my-4" style={{color: "#4F4557"}}>Nestled within the vibrant academic landscape of Silicon Institute of Engineering, the Google Developer Student Club (GDSC) stands as a beacon of innovation, collaboration, and technological exploration. Our club is a vibrant community of passionate tech-enthusiasts, united by a shared desire to harness the power of Google technologies to create positive change.</p>
                </div>

                {/* Image */}
                <div className="image-container">
                    <img src={require(`./Media/About-img.jpg`)} className="h-auto max-w-xs rounded-lg" alt="pic" />
                </div>

                <div className="mb-8 text-center">
                    <h2 className="text-xl font-semibold" style={{color: "#4F4557"}}>Our Mission</h2>
                    <p className="mx-4 my-4" style={{color: "#4F4557"}}>At Silicon GDSC, we are driven by a simple yet powerful mission: to foster an inclusive and supportive environment where students can cultivate their technical skills, expand their knowledge horizons, and contribute meaningfully to the ever-evolving world of technology.</p>
                </div>

                <div className="mb-8 text-center">
                    <h2 className="text-xl font-semibold" style={{color: "#4F4557"}}>Our Vision</h2>
                    <p className="mx-4 my-4" style={{color: "#4F4557"}}>We envision a future where our members emerge as the next generation of tech leaders, equipped with the skills, expertise, and mindset to revolutionize industries, solve global challenges, and shape the digital landscape of tomorrow.</p>
                </div>

                {/* Video */}
                <div className='mb-4 video-container'>
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/earTjC0iSjg" title="What are Google Developer Student Clubs?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className="mb-8 text-center">
                    <h2 className="text-xl font-semibold" style={{color: "#4F4557"}}>Our Values</h2>
                    <p className="mx-4 my-4" style={{color: "#4F4557"}}>Our club is firmly anchored in a set of core values that guide our every endeavor:</p>
                        <ul className="mx-4 my-4 text-left"  style={{listStyleType: "disc", color: "#4F4557"}}>
                            <li className="my-2"><strong>Inclusivity:</strong> &nbsp; We believe that a diverse and inclusive environment is the foundation for fostering innovation and creativity. We welcome students from all backgrounds, regardless of their academic discipline, technical expertise, or prior experience.</li>
                            <li className="my-2"><strong>Empowerment:</strong> &nbsp; We empower our members to take ownership of their learning journey, providing them with the resources, guidance, and mentorship they need to excel in their chosen fields.</li>
                            <li className="my-2"><strong>Collaboration:</strong> &nbsp; We foster a spirit of collaboration, encouraging our members to learn from each other, share their knowledge, and work together on impactful projects.</li>
                            <li className="my-2"><strong>Community Engagement:</strong> &nbsp; We strive to make a positive impact beyond our campus, actively engaging with local communities, businesses, and organizations to apply our technical skills to address real-world challenges.</li>
                        </ul>
                </div>

            </div>
        </motion.div>
        </>
    );
}