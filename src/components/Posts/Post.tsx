import React from 'react'
import { FiTrash2 } from "react-icons/fi";
import {CgNotes} from 'react-icons/cg';

export interface PostPropType {
    author: string,
    id: string,
    authorId: string,
    title: string,
    description: string,
}

export const Post: React.FC<PostPropType> = ({author, id, authorId, title, description}) => {
    return (
        <div className='hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] border-2 rounded-lg mb-2 w-96 hover:bg-slate-100'>
            <div className='border-b-2 p-5'>
                author: {author}
            </div>
            <div className='border-b-2 p-5'>
                id: {id}
            </div>
            <div className='border-b-2 p-5'>
                title: {title}
            </div>
            <div className='border-b-2 p-5'>
                desc: {description}
            </div>
            <div className='flex justify-between p-5'>
                <button className='flex justify-center w-40 text-white border-4 rounded-lg border-sky-500 p-2 bg-sky-500 hover:bg-sky-700 hover:border-sky-700'>
                    <FiTrash2/>
                </button>
                <button className='flex justify-center w-40 text-white border-4 rounded-lg border-sky-500 p-2 bg-sky-500 hover:bg-sky-700 hover:border-sky-700'>
                    <CgNotes />
                </button>
            </div>
        </div>
    )
}
