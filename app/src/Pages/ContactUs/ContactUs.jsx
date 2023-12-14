import './ContactUs.css';
import PhoneInput from 'react-phone-input-2';
import React, {useState} from 'react';
import 'react-phone-input-2/lib/style.css';

export default function ContactUs(){
    const [PhoneNumber, setphoneNumber] = useState('');
    const [valid, setValid] = useState(true);
  
    const handleChange=(value) =>{
      setphoneNumber(value);
      setValid(validatePhoneNumber(value));
    };
  
    const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\d{10}$/;
      return phoneNumberPattern.test(phoneNumber);
    }

    return(
        <>
        <div>
        <div className="flex flex-col items-center p-4 my-2">
                <h1 className="text-2xl font-semibold text-center" style={{color:"#393646"}}>
                    CONTACT US
                </h1>

                <p className="mx-4 my-4" style={{color: "#4F4557"}}>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.</p>

                <div className='flex'>
                  <form action="" className='grid'>
                    <div>
                      <div className=''>
                        <div className='flex justify-between'>
                          <input type="text" placeholder='Your Name' className='w-full px-3 py-2 m-2 text-center border rounded shadow' />
                          <input type="email" placeholder='Email' className='w-full px-3 py-2 m-2 text-center border rounded shadow' />                    
                        </div>
                        <div className='flex justify-between'>
                        <PhoneInput country={'us'} inputProps={{
                                    required: true,
                                  }} placeholder="Your Phone Number" className="text-center border rounded shadow input-field" value={PhoneNumber} on onChange={handleChange}/>
                                  {!valid && <p>Please enter valid number </p>}
                          <input type="text" placeholder='Intersted In' className='w-full px-3 py-2 m-2 text-center border rounded shadow' />                    
                        </div>
                      </div>
                      <div className='flex justify-center'>
                        <textarea name="" placeholder='How can we help?' id="" cols="100" rows="10" className='w-full px-3 py-2 m-2 text-center border rounded shadow'></textarea>
                      </div>
                      <div className='flex justify-center p-4'>
                      <button type='Submit' className='w-full px-3 py-2 m-2 font-semibold text-center border shadow' style={{backgroundColor:'#0078ff', color: 'white', borderRadius:'9999px'}}>Submit</button>
                      </div>
                      <div className='flex justify-center'>
                      <p className="mx-4 my-4" style={{color: "#4F4557"}}>By clicking, you agree to our Terms & Conditions, Privacy and Data Protection Policy.</p>
                      </div>
                    </div>
                  </form>
                </div>
        </div>
        <div className='p-4 mx-8 my-2 cards'>
          <iframe class="map2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.7805546628915!2d85.80376107469674!3d20.350682310723464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1702528233902!5m2!1sen!2sin" style={{allowfullscreen:"", loading:"lazy", referrerpolicy: "no-referrer-when-downgrade", width: "100%", height: "100%"}}></iframe>
          <div className='flex flex-col info' style={{backgroundColor: "#f3ede6"}}>
              <span className='mb-1 font-semibold text-l' style={{color:"#4F4557"}}>Address</span>
              <span className='text-xl font-bold' style={{color:"#393646"}}> Silicon Hills, near DLF cybercity, Patia, Bhubaneswar, Odisha 751024</span>
              <span className='mt-6 mb-1' style={{color:"#4F4557"}}>Email</span>
              <a href="mailto:" target='' className='text-xl font-bold' style={{color:"#393646"}}>xyz@silicon.ac.in</a>
              <span className='mt-6 mb-1' style={{color: "#4F4557"}}>Contact Number</span>
              <a href="tel:" target='' className='text-xl font-bold' style={{color:"#393646"}}>+91 12345 67890</a>

              <div className='' style={{display:"grid", gridTemplateColumns: "repeat(4, 40px)", columnGap: "8px", marginTop:"48px"}}>
                <a className='flex items-center justify-center'style={{backgroundColor: "#fffdfa", width:"40px", height: "40px", borderRadius: "50%"}} href="https://www.facebook.com/" target='' aria-label='Facebook'>
                  <span className='inline-grid'>
                    <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 24 24">
                      <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path>
                    </svg>
                  </span>
                </a>
                <a className='flex items-center justify-center'style={{backgroundColor: "#fffdfa", width:"40px", height: "40px", borderRadius: "50%"}} href="https://twitter.com//" target='' aria-label='Twitter'>
                  <span className='inline-grid'>
                    <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 24 24">
                      <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
                    </svg>
                  </span>
                </a>
                <a className='flex items-center justify-center'style={{backgroundColor: "#fffdfa", width:"40px", height: "40px", borderRadius: "50%"}} href="https://www.instagram.com/" target='' aria-label='Facebook'>
                  <span className='inline-grid'>
                    <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64">
                      <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                    </svg>
                  </span>
                </a>
                <a className='flex items-center justify-center'style={{backgroundColor: "#fffdfa", width:"40px", height: "40px", borderRadius: "50%"}} href="https://www.linkedin.com/" target='' aria-label='Facebook'>
                  <span className='inline-grid'>
                    <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 30 30">
                      <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065	c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                    </svg>
                  </span>
                </a>
              </div>
          </div>
        </div>
        </div>
        </>
    );
}