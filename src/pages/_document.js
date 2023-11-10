// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Other tags */}
                    <script
                        async
                        defer
                        src="https://tools.luckyorange.com/core/lo.js?site-id=e091fe9f"
                    ></script>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
