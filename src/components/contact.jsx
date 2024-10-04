import React from 'react'
import { useForm } from 'react-hook-form';
// import { BsEmojiAngryFill } from 'react-icons/bs';
import axios from 'axios';
import toast from 'react-hot-toast';

function contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <div id='Contact'>
            <div className='max-w-[1320px] h-auto mx-auto pt-3 pb-7'>
                <p className='text-black font-semibold capitalize text-2xl text-center md:text-left'>
                    contact me
                </p>
                <p className='text-black capitalize text-md pt-3 text-center md:text-left'>
                    Fill the form to reach Me.
                </p>
            </div>
            <div className='flex justify-center items-center max-w-[400px] h-auto mx-auto bg-slate-300 mt-3 pt-3 pb-7 rounded-lg'>
                <form
                    onSubmit={handleSubmit(
                        async (data) => {

                            const userInfo =
                            {
                                name: data.name,
                                email: data.email,
                                message: data.message
                            }
                            try {
                                await axios.post("https://getform.io/f/bqonredb", userInfo);
                                toast.success("your message has been sent");
                            }
                            catch (error) {
                                console.log(error);
                                toast.error("Something Went wrong")
                            }
                        }
                    )}

                // action="https://getform.io/f/bqonredb" 
                // method='POST'
                >

                    <h1 className='text-center font-medium text-xl'>Send Your Message</h1>
                    <div className='pt-4'>
                        <label className='block text-[14px]'>Full Name: </label>

                        <input
                            {...register('name', { required: true })}
                            type="text"
                            id='name'
                            placeholder='Name'
                            name='name'
                            className='rounded-md pl-2 '
                        />
                        {errors.name && <p>name is required.</p>}
                    </div>

                    <div className='pt-4'>
                        <label className='block text-[14px]'>Email : </label>
                        <input
                            {...register('email', { required: true })}
                            type="email" id='email' placeholder='example@gmail.com' name='email' className='rounded-md pl-2' />
                        {errors.message && <p>email is required.</p>}
                    </div>

                    <div className='pt-4'>
                        <label className='block text-[14px]'>Message : </label>
                        <textarea
                            {...register('message', { required: true })}
                            type="text" id='message' placeholder='message' name='message' className='rounded-md pl-2 w-[318px]' />
                        {errors.message && <p>Kuch Likh bhai idhar , bahut mehnat kari hai.</p>}
                    </div>

                    <div>
                        <button className='bg-black text-white rounded-md px-3 py-1 mt-4 cursor-pointer hover:scale-[110%] duration-[0.5s]'
                            type='submit'
                        >
                            Send
                        </button>
                    </div>
                </form>

            </div>
            <br />
            <hr />
        </div>
    )
}

export default contact