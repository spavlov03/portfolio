import React from 'react'
import pic from '../assets/pic.jpeg'
// import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com'



const Main = () => {
  // const [name,setName] = useState(); 
  // const [email,setEmail] = useState(); 
  // const [message,setMessage] = useState(); 
  // const handleSubmit = (e) => { 
  //   e.preventDefault();
    
  // }

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
    
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };


    const onSubmit = async (data) => {
      const { name, email,  message } = data;
      try {
        const templateParams = {
          name,
          email,
          message
        };
        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_EMAILJS_USER_ID
        );
        reset();
        toastifySuccess();
      } catch (e) {
        console.log(e);
      }
    };
  

  return (
    <div className='flex flex-col items-center anchor' id='home'>
      <div className='flex gap-30 mb-10'>
        <img className='pic' src={pic} alt="Svet" />
        <div className='pt-20 pl-10 top'>
          <p className='text-green text-xl '>Hey there,</p>
          <p className='text-green text-5xl anchor' id='about'>I'm Svet!</p>
        </div>
      </div>
      <p className='lg:w-2/3 w-5/6 mb-10'>I am a self-starter, forward thinking full stack developer. Have gone thru different industries to gain leadership and critical thinking experience. I have strong passion for technologies and the way of the future. </p>
      <ul className='lg:w-2/3 w-5/6 mb-10'>
        <li>Coding Dojo graduate with experience with the following technologies: </li>
        <li>Languages: HTML, CSS, JavaScript , Swift , Python, SQL</li>
        <li>Front End: React , jQuery , Ajax , JSON, RESTful APIs, Bootstrap</li>
        <li>Back End: Flask, Django, Express, OOP, AWS</li>
        <li>Database: MySQL,Mongo DB, Django ORM</li>
        <li>Software: Photoshop, Final Cut Pro , Office Suite and many more. </li>
      </ul>
      <ul className='lg:w-2/3 w-5/6 mb-10'>
        <li>In a developer role I will : </li>
        <li>- Build responsive frontend and backend designs to spec per the UX design.</li>
        <li>- Problem solve , and work with team to meet expected outcome at deadline </li>
        <li>- Collaborate with other software developers </li>
        <li>- Prioritize multiple projects to ensure quality and timely results</li>
        <li>- Be coachable and accepting of constructive criticism</li>
        <li>- Learn new technologies as needed</li>
      </ul>
      <p className='text-green text-xl anchor' id='projects'>My Projects</p>
      <div className='lg:w-2/3 w-5/6'>
        <p className='text-green text-l'>Recipify</p> 
        <p>Full Stack Developer | Live Site | GitHub</p>
        <p>An app with full CRUD functionality for browsing and creating recipes. 
          <ul>
            <li>Established full stack single page web application with ReactJS front end with functional components. Developed Node and Express backend connected to MongoDB database utilizing flexible structure.</li>
            <li>Implemented Bootstrap and Material UI frameworks for responsive design and functionality.</li>
            <li>Developed different user types using conditional rendering for full control over user posts to ensure all posts follow app guidelines and conditions.</li>
            <li>Encrypted users’ passwords with Bcrypt and hashing for user security.</li>
            <li>Deployed to the web using AWS EC2 services.</li>
          </ul>
        </p>
      </div>
      <div className="parallax"></div>
      <div className='lg:w-2/3 w-5/6'>
        <p className='text-green text-l'>Dojo Connect</p> 
        <p>Lead Developer/Backend Developer | Live Site | GitHub</p>
        <p>Platform for developers to post and comment on coding issues. 
          <ul>
            <li>Developed back-end server with Flask. Created controllers and models for querying database and navigating through web application.</li>
            <li>Organized team meetings, delegated responsibilities to team, and kept team on track using discord, google docs and GitHub to stay up to date with current working version.</li>
            <li>Encrypted users’ passwords with Bcrypt and hashing for user security.</li>
            <li>Deployed to the web using AWS EC2 services.</li>
          </ul>
        </p>
      </div>
      <div className="parallax2 mb-10"></div>
      <p className='text-green text-2xl w-1/2'>If you would like to get in touch with me , please fill out the form below and I will get back to you as soon as I can!</p>
      <p className='text-green text-xl anchor' id='contact'>Contact Me</p>
      {/* <p className='w-1/2 '>Contanct: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt saepe amet, est nulla temporibus eveniet accusamus perferendis expedita ut, et ullam debitis. Fugiat animi eius expedita officiis voluptate temporibus velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum velit omnis esse eaque odio cumque quisquam reprehenderit! Facilis, quas nam. Ducimus aliquam labore nulla molestiae delectus neque reprehenderit quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia expedita fugit quibusdam minus, maiores itaque, tempora perspiciatis fugiat delectus voluptatum, deserunt placeat hic eligendi nemo cupiditate nihil non consequatur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt saepe amet, est nulla temporibus eveniet accusamus perferendis expedita ut, et ullam debitis. Fugiat animi eius expedita officiis voluptate temporibus velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum velit omnis esse eaque odio cumque quisquam reprehenderit! Facilis, quas nam. Ducimus aliquam labore nulla molestiae delectus neque reprehenderit quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia expedita fugit quibusdam minus, maiores itaque, tempora perspiciatis fugiat delectus voluptatum, deserunt placeat hic eligendi nemo cupiditate nihil non consequatur?</p> */}
      <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="">Your Name:</label>
        <input type="text" className='rounded text-green' name='name' 
        {...register('name', {
          required: { value: true, message: 'Please enter your name' },
          maxLength: {
            value: 30,
            message: 'Please use 30 characters or less'
          }
        })}
        />
        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
        <label htmlFor="">Your Email:</label>
        <input type="email" className='rounded text-green' name='email' 
        {...register('email', {
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        })}
        />
        {errors.email && (<span className='errorMessage'>Please enter a valid email address</span>)}
        <label htmlFor="">Message</label>
        <textarea name="message" id="" cols="30" rows="5" className='rounded text-green' 
        {...register('message', {
          required: true
        })}
        ></textarea>
        {errors.message && <span className='errorMessage'>Please enter a message</span>}
        <input type="submit" value="SEND" id='contactBtn' className='rounded'/>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Main