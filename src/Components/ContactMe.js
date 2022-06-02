import React , {useState , useRef } from 'react'
import emailjs from '@emailjs/browser';


function ContactMe() {
    const [name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const [Submit , setSubmit ] = useState(false);
    const  [Alert, setAlert]   = useState('')
    const form = useRef();
 
     
// Sending Data using EMail js
    const sendEmail = (e) => {
        e.preventDefault();
        if(name==='' || Email==='' || Message ===''){
            setAlert('Fill Empty Fields')
            setSubmit(true);
            setTimeout(() => {
                setSubmit(false);
            }, 3000);

        }
        else{
    
        emailjs.sendForm('service_nmbar7n', 'template_4geys7f', form.current, '8WiaSW-voYP5sFRpu')
          .then((result) => {
              setSubmit(true);
             
              setAlert('Message Sent ✔');
              setTimeout(() => {
                  setSubmit(false);
              }, 3000);
              setEmail('');
              setMessage('');
              setName('');
          }, (error) => {
              console.log('error occured');
            
          });
      };
    };

    return (
        <div id='Contact' className=' snap-start bg-[#0B0B15] h-screen flex flex-col justify-center items-center text-white'>
            <h1 className='logo text-3xl p-2 mb-5 text-[#EC0B0B]'>Contact Me</h1>
            <div className="contact">
                <p className='bg-gray-900 m-2 p-2 rounded-r-md '>geekyvikas240052@gmai.com</p>
                <p className='bg-gray-900 m-2 p-2 rounded-r-md '>07837540734</p>
            </div>
            <form action="" ref={form} onSubmit={sendEmail} className='flex items-center flex-col'>
                <div className='flex  '>
                    <input className='p-2  text-center rounded w-full bg-transparent border-b-4  outline-none m-2  border-[#EC0B0B]' type="text" placeholder='Enter Name' required name="user_name" value={name} onChange={(e)=>setName(e.target.value)} id="" />
                    <input className='p-2  text-center rounded w-full bg-transparent border-b-4  outline-none m-2 border-[#EC0B0B]' type="email" name="user_email" id=""  required value={Email} onChange={e=>setEmail(e.target.value)} placeholder='Enter Your Email'/>
                </div>
                    <input className='p-2  text-center rounded w-full bg-transparent border-b-4  outline-none m-2 border-[#EC0B0B]' type="textArea" value={Message} required onChange={e=>setMessage(e.target.value)} name="message" id="" placeholder="What's On Your Mind" />
                <input className='p-2  w-full mt-10 rounded-md bg-[#EC0B0B] cursor-pointer hover:outline hover:outline-green-500' type="button" onClick={sendEmail} value="Submit" />
            </form>
               { Submit && <div className='fixed -right-2 p-4 w-80 rounded bottom-1/2 text-center text-2xl shadow-md bg-gray-600  transition  delay-150  space-y-10'>{Alert} </div> }
        </div>
    )
}

export default ContactMe