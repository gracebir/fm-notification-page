/** @format */

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["500", "800"],
});

export const metadata: Metadata = {
    title: "notification page",
    description: "frontend mentor notification challenge",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={jakarta.className}>{children}</body>
        </html>
    );
}
