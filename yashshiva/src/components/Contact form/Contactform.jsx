import React from 'react'
import { Toaster,toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const Contactform = () => {
    const {register,handleSubmit,setValue,formState:{errors}} = useForm()
    const submit =async (data)=>{
     const res = await axios.post('http://localhost:3000/mail',data)
    
     
      setTimeout(() => {
        toast('Thanks for connecting!', {
                icon: '👍',
          });
      }, 100);
      
          setTimeout(() => {
            toast('I have sent you a mail',{icon:'📩'})
          }, 4000);
      
      setValue('name',"")
      setValue('email',"")
      setValue('message',"")
      setValue('phone',"")
    }
    const handleInvalid = ()=>{
        toast.error("Please fill required details")
    }
  return (
    <div className='p-10 flex justify-center' id='mail'>
      <Toaster position='bottom-right'/>
      <form action="" onSubmit={handleSubmit(submit,handleInvalid)} className='bg-stone-600/30 w-[100%] lg:w-[50%] rounded-md flex justify-center'>
        <div className=' w-[100%] p-5 lg:p-10'>
            <div className='text-center text-2xl underline font-thin'>Get in Touch</div>
            <div className='grid gap-4 mb-4'>
            <label htmlFor="">Name</label>
            <input {...register('name',{required:'Name is reqired',
              minLength:{value:3,message:'Name must be 3 chars long'}
            })} placeholder='Enter your name' type="text" className='rounded-md p-2 outline-none focus:ring-4 ring-blue-500 ring-offset-1 transition duration-300 text-stone-500'/>
            {errors.name && (
              <div className='text-red-600'>{errors.name.message}</div>
            )}
            </div>
            <div className='grid gap-4 mb-4'>
            <label htmlFor="">Email</label>
            <input {...register('email',{required:'Email is required',pattern:{
              value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message:'Enter a valid email address'
            }})} placeholder='Enter your email' type="text" className='rounded-md p-2 outline-none focus:ring-4 ring-blue-500 transition duration-300 text-stone-500'/>
            {errors.email && (
              <div className='text-red-500'>{errors.email.message}</div>
            )}
            </div>
            <div className='grid gap-4 mb-4'>
            <label htmlFor="">Message</label>
            <input {...register('message',{required:'Please write any message'})} placeholder='Enter your message' type="text" className='rounded-md p-2 outline-none focus:ring-4 ring-blue-500 transition duration-300 text-stone-500'/>
            {errors.message && (
              <div className='text-red-500'>{errors.message.message}</div>
            )}
            </div>
            <div className='grid gap-4 mb-4'>
            <label htmlFor="">Phone No. <span className='text-xs text-stone-500'>(optional)</span></label>
            <input placeholder='Enter your phone no' {...register('phone',{pattern:{value:/^[0-9]{10}$/,message:'Enter a valid phone no'}})} type="text" className='rounded-md p-2 outline-none focus:ring-4 ring-blue-500 transition duration-300 text-stone-500'/>
            {errors.phone && (
              <div className='text-red-500'>{errors.phone.message}</div>
            )}
            </div>
            <div className='text-center'>
                <button type='submit' className='bg-purple-300 p-3 rounded-md hover:bg-purple-600 w-full mt-5 text-black focus:ring-2 ring-purple-700 transition duration-300'>Submit</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Contactform
