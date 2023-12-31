/** @format */
"use client";
import { datas } from "@/data";
import React from "react";
import Message from "./Message";

const Notifications = () => {
    return (
        <div className='max-w-3xl bg-white flex flex-col gap-8 lg:rounded-lg rounded-none lg:shadow-md shadow-none mx-auto py-10 px-4 lg:px-8'>
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
            <div className='flex flex-col gap-4'>
                {datas.map((item) => (
                    <Message
                        replyText={item.replyText!}
                        isRead={item.isRead}
                        messageText={item.messageText}
                        groupName={item.groupName!}
                        mediaSent={item.mediaSent!}
                        boldedtext={item.boldedtext!}
                        key={item.id}
                        timePosted={item.timePosted}
                        username={item.username}
                        avatar={item.avatar}
                    />
                ))}
            </div>
        </div>
    );
};

export default Notifications;
