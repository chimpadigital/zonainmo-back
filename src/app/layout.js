import ScrollToTop from "@/components/common/ScrollTop";
import { ClerkProvider } from '@clerk/nextjs'

import "../../public/scss/main.scss"; 
import { DM_Sans, Poppins } from "next/font/google"; 

if (typeof window !== "undefined") {
  import("bootstrap");
}

// DM_Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font-family",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`body  ${poppins.className} ${dmSans.className}`}
        cz-shortcut-listen="false"
      >
        
        <div className="wrapper ovh">{children}</div> 
        <ScrollToTop />
      </body>
    </html>
    </ClerkProvider>
  );
}
