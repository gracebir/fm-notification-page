/** @format */
"use client";
import React from "react";

const Notifications = () => {
    return (
        <div className='max-w-4xl bg-white lg:rounded-lg rounded-none lg:shadow-md shadow-none mx-auto py-10 px-4 lg:px-8'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <h3 className='font-extrabold lg:text-2xl text-lg'>
                        Notifications
                    </h3>
                    <span className='px-4 font-extrabold rounded-lg py-1 bg-blue text-white'>
                        3
                    </span>
                </div>
                <span className='text-sm lg:text-base cursor-pointer'>
                    Mark all as read
                </span>
            </div>
        </div>
    );
};

export default Notifications;
