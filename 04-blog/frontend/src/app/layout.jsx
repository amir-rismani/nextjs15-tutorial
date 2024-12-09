import Header from "@/components/Header";
import "@/styles/globals.css"
import vazirFont from "constants/localFont";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: '%s | وب اپلیکیشن مدیریت بلاگ',
    default: 'وب اپلیکیشن مدیریت بلاگ',
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="RTL">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Toaster/>

        <Header />
        <main className="container xl:max-w-screen-xl">
          {children}
        </main>
      </body>
    </html>
  );
}
