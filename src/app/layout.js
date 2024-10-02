import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/services/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car repairing workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <Navbar></Navbar>
          <div>
            {children}
          </div>
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
