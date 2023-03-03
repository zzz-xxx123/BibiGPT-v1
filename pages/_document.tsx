import { Crisp } from "crisp-sdk-web";
import Document, { Head, Html, Main, NextScript } from "next/document";

if (typeof window !== "undefined") {
  Crisp.configure("ed6ccc61-9363-4712-abc9-f61cb6726ec6");
}

class MyDocument extends Document {
  render() {
    let description = "B 站视频内容一键总结（支持 iOS 快捷指令）";
    let ogimage = "https://b.jimmylv.cn/og-image.png";
    let sitename = "b.jimmylv.cn";
    let title = "哔哩哔哩 · 视频内容一键总结";

    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐣</text></svg>"
          />
          <meta name="description" content={description} />
          <meta property="og:site_name" content={sitename} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta property="og:image" content={ogimage} />
          <meta name="twitter:image" content={ogimage} />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white text-gray-700">
          <Main />
          <NextScript />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
