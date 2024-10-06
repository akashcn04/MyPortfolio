import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Async function to handle form submission
    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            // Send data to Getform.io using Axios
            const response = await axios.post('https://getform.io/f/bqonredb', data, {
                headers: {
                    'Accept': 'application/json', // Expecting a JSON response
                },
            });

            // Display a success toast notification
            toast.success('Submission successful! Thank you for your message.');
        } catch (error) {
            // Display an error toast notification
            console.error('Submission failed:', error);
            toast.error('Submission failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id='Contact'>
            <div className='max-w-[1320px] h-auto mx-auto pt-3 pb-7'>
                <p className='text-black font-semibold capitalize text-2xl text-center md:text-left'>
                    Contact Me
                </p>
                <p className='text-black capitalize text-md pt-3 text-center md:text-left'>
                    Fill the form to reach me.
                </p>
            </div>
            <div className='flex justify-center items-center max-w-[400px] h-auto mx-auto bg-slate-300 mt-3 pt-3 pb-7 rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center font-medium text-xl'>Send Your Message</h1>

                    <div className='pt-4'>
                        <label className='block text-[14px]'>Full Name:</label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            id='name'
                            placeholder='Name'
                            className='rounded-md pl-2'
                        />
                        {errors.name && <p className='text-red-500'>Name is required.</p>}
                    </div>

                    <div className='pt-4'>
                        <label className='block text-[14px]'>Email:</label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            id='email'
                            placeholder='example@gmail.com'
                            className='rounded-md pl-2'
                        />
                        {errors.email && <p className='text-red-500'>Email is required.</p>}
                    </div>

                    <div className='pt-4'>
                        <label className='block text-[14px]'>Message:</label>
                        <textarea
                            {...register('message', { required: true })}
                            id='message'
                            placeholder='Your message here'
                            className='rounded-md pl-2 w-[318px]'
                        />
                        {errors.message && <p className='text-red-500'>Message is required.</p>}
                    </div>

                    <div>
                        <button
                            id='submit-button'
                            className='bg-black text-white rounded-md px-3 py-1 mt-4 cursor-pointer hover:scale-[110%] duration-[0.5s]'
                            type="submit"
                            disabled={isSubmitting} // Disable button while submitting
                            style={{
                                opacity: isSubmitting ? 0.5 : 1, // Reduce opacity while submitting
                                transition: 'opacity 0.3s ease', // Smooth opacity transition
                                cursor: isSubmitting ? 'not-allowed' : 'pointer', // Change cursor when disabled
                            }}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
            <br />
            <hr />
        </div>
    );
}

export default Contact;
