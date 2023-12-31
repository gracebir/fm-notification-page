/** @format */
"use client";
import Image from "next/image";
import React from "react";

type messageProps = {
    avatar: string;
    username: string;
    mediaSent?: string;
    boldedtext?: string;
    groupName?: string;
    messageText: string;
    isRead: boolean;
    replyText: string;
    timePosted: string;
};

const Message = ({
    avatar,
    username,
    boldedtext,
    groupName,
    messageText,
    isRead,
    timePosted,
    replyText,
    mediaSent,
}: messageProps) => {
    return (
        <>
            <div
                className={`flex items-start gap-4 ${
                    isRead ? "bg-light-grayish-blue-1" : ""
                } px-6 py-4 rounded-md`}
            >
                <Image src={avatar} alt={username} width={50} height={50} />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <p className='text-sm lg:text-base'>
                                <span className='font-extrabold'>
                                    {username}
                                </span>{" "}
                                {messageText}{" "}
                                {boldedtext && (
                                    <span className='font-extrabold text-grayish-blue'>
                                        {boldedtext}
                                    </span>
                                )}
                                {groupName && (
                                    <span className='font-extrabold text-blue'>
                                        {groupName}
                                    </span>
                                )}
                            </p>
                            {isRead && (
                                <div className='min-w-2 h-2 bg-red rounded-2xl'>
                                    {" "}
                                </div>
                            )}
                        </div>
                        {mediaSent && (
                            <Image
                                src={mediaSent}
                                alt=''
                                width={53}
                                height={53}
                            />
                        )}
                    </div>
                    <span className='text-grayish-blue'>{timePosted} ago</span>
                    {replyText && (
                        <div className='mt-4 border rounded-md px-4 max-w-xl py-4'>
                            <p>{replyText}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Message;
