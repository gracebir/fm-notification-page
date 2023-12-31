/** @format */
"use client";
import React from "react";

type messageProps = {
    name: string;
    avatar: string;
    username: string;
    boldedtext?: string;
    groupName?: string;
    messageText: string;
};

const Message = ({
    name,
    avatar,
    username,
    boldedtext,
    groupName,
    messageText,
}: messageProps) => {
    return <div></div>;
};

export default Message;
