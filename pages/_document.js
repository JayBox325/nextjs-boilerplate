// pages/_document.js
import CustomHead from '@/components/_Layout/CustomHead'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <CustomHead />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}