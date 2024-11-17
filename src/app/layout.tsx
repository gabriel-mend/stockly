import Sidebar from "./_components/Sidebar";
import "./globals.css";

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'], display: 'auto' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex gap-8 h-full">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
