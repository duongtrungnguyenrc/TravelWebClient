import './global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { StateProvider } from '../_components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VN Travel',
  description: 'Generated by development team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer/>
        <StateProvider>
          { children }
        </StateProvider>
      </body>
    </html>
  )
}
