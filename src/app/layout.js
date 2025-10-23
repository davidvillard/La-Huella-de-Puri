import Navbar from "@/components/Navbar/navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "La Huella De Puri",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
