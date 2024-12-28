import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";
import imgfe from "../assets/WA_ICON.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PLASTINDIA",
  description: "PLASTINDIA Foundation",
  favicon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
};

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/918051305305?text=Hi"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-[#032523] text-white p-2 rounded-full shadow-lg transition-colors duration-300 z-50"
    >
      <Image src={imgfe} alt="WhatsApp" width={40} height={40} />
    </a>
  );
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://plast-india.vercel.app/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://plast-india.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white`}>
        {children}
        <WhatsAppIcon />
        <noscript>
          For full functionality of this site it is necessary to enable
          JavaScript. Here are the{" "}
          <a
            href="https://www.enable-javascript.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instructions how to enable JavaScript in your web browser
          </a>
          .
        </noscript>
      </body>
    </html>
  );
};

export default RootLayout;
