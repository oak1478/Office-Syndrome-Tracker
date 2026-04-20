import "./globals.css"; // [cite: 478]
import Providers from "./providers";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) { // [cite: 481]
  return (
    <html lang="th"> 
      <body>
        <Providers> 
          <Navbar /> 
          <main className="site-content">{children}</main> 
        </Providers> 
      </body>
    </html>
  ); // [cite: 482, 483, 484, 485, 486, 487, 488, 489]
}