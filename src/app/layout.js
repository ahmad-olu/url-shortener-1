import "./globals.css";
import { Inter } from "next/font/google";
import NavbarForUser, { NavbarForAnon } from "./ui/navbar";
import { getSessionUser } from "./lib/session";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const user = await getSessionUser();
  const loggedIn = user !== null;
  const NavBar = loggedIn ? <NavbarForUser /> : <NavbarForAnon />;
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        {NavBar}
        {children}
      </body>
    </html>
  );
}
