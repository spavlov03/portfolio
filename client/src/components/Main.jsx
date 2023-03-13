import React from 'react'
import pic from '../assets/pic.jpeg'
import { useState } from 'react'
import { useForm } from 'react-hook-form';

const Main = () => {
  // const [name,setName] = useState(); 
  // const [email,setEmail] = useState(); 
  // const [message,setMessage] = useState(); 
  // const handleSubmit = (e) => { 
  //   e.preventDefault();
    
  // }

  const ContactForm = () => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm();
    
    const onSubmit = async (data) => {
      const { name, email, subject, message } = data;
      try {
        const templateParams = {
          name,
          email,
          subject,
          message
        };
        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        );
        reset();
      } catch (e) {
        console.log(e);
      }
    };


  return (
    <div className='flex flex-col items-center' id='pic'>
      <img className='pic' src={pic} alt="" />
      <p className='text-green text-xl'>Hey there,</p>
      <p className='text-green text-5xl anchor' id='about'>I'm Svet.</p>
      <p className='w-1/2 '>About : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt saepe amet, est nulla temporibus eveniet accusamus perferendis expedita ut, et ullam debitis. Fugiat animi eius expedita officiis voluptate temporibus velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum velit omnis esse eaque odio cumque quisquam reprehenderit! Facilis, quas nam. Ducimus aliquam labore nulla molestiae delectus neque reprehenderit quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia expedita fugit quibusdam minus, maiores itaque, tempora perspiciatis fugiat delectus voluptatum, deserunt placeat hic eligendi nemo cupiditate nihil non consequatur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt saepe amet, est nulla temporibus eveniet accusamus perferendis expedita ut, et ullam debitis. Fugiat animi eius expedita officiis voluptate temporibus velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum velit omnis esse eaque odio cumque quisquam reprehenderit! Facilis, quas nam. Ducimus aliquam labore nulla molestiae delectus neque reprehenderit quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia expedita fugit quibusdam minus, maiores itaque, tempora perspiciatis fugiat delectus voluptatum, deserunt placeat hic eligendi nemo cupiditate nihil non consequatur?</p>
      <p className='text-green text-xl anchor' id='projects'>My Projects</p>
      <p className='w-1/2 '>Projects: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt saepe amet, est nulla temporibus eveniet accusamus perferendis expedita ut, et ullam debitis. Fugiat animi eius expedita officiis voluptate temporibus velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum velit omnis esse eaque odio cumque quisquam reprehenderit! Facilis, quas nam. Ducimus aliquam labore nulla molestiae delectus neque reprehenderit quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia expedita fugit quibusdam minus, maiores itaque, tempora perspiciatis fugiat delectus voluptatum, deserunt placeat hic eligendi nemo cupiditate nihil non consequatur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt saepe amet, est nulla temporibus eveniet accusamus perferendis expedita ut, et ullam debitis. Fugiat animi eius expedita officiis voluptate temporibus velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum velit omnis esse eaque odio cumque quisquam reprehenderit! Facilis, quas nam. Ducimus aliquam labore nulla molestiae delectus neque reprehenderit quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia expedita fugit quibusdam minus, maiores itaque, tempora perspiciatis fugiat delectus voluptatum, deserunt placeat hic eligendi nemo cupiditate nihil non consequatur?</p>
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
    </div>
  )
}

export default Main