import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { BaseLayoutProps } from '@/types/types'
import { ToastContainer } from 'react-toastify';

import { Header, Footer} from '@/components/index';

import './globals.scss'

import { QueryClientProvider } from '@/providers/QueryClientProvider'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
    title: 'UGChub',
    description: 'UGChub',
}

export default function RootLayout({ children }: BaseLayoutProps) {

    return (
        <html lang="en" className="bg-bodyColor">
            <body className={poppins.className}>
                <QueryClientProvider>
                    <div className="min-h-screen grid grid-rows-layout">
                        <Header />
                        <main className="text-mainText">
                            {children}
                        </main>
                        <Footer/>
                    </div>
                </QueryClientProvider>
                <ToastContainer />
            </body>
        </html>
    )
}
