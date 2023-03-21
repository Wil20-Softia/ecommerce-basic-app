import React from 'react';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

import { Layout } from '../components';
import { StateContext } from '../context/StateContext.js';

export default function MyApp({ Component, pageProps }){
    return (
        <StateContext>
            <Layout>
                <Toaster/>
                <Component {...pageProps} />
            </Layout>
        </StateContext>
    )      
}