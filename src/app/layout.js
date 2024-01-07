"use client";
import "./globals.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// export default function MyPage() {
//   return (
//     <html className={`${poppins.variable}`}>
//       <body>
//         <h1 className={`text-${poppins.weight['600']}`}>Hello, world!</h1>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <Header />
        <div className={`text-${montserrat}`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
