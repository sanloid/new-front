import React from 'react'
import { FaSave } from "react-icons/fa";

export interface NewPostFormPorpType {
    setPost: Function,
}

export const NewPostForm: React.FC<NewPostFormPorpType> = () => {
    return (
        <div className='grid justify-center mb-5 border-2 p-5 rounded-lg'>
            <div className='p-5'>
                <input type="text" className='border-2 p-2 rounded-lg focus:border-sky-500 focus:outline-none' placeholder='title...'/>
            </div>
            <div className='p-5'>
                <input type="text" className='border-2 p-2 rounded-lg focus:border-sky-500 focus:outline-none' placeholder='description...'/>
            </div>
            <div className='p-5 flex justify-center'>
                <button className='flex justify-center text-white w-56 border-4 rounded-lg p-2 border-sky-500 bg-sky-500 hover:bg-sky-700 hover:border-sky-700'>
                    <FaSave/>
                </button>
            </div>
        </div>
    )
}
