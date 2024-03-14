import { Quicksand as Font } from "next/font/google";
import Menubar from "./menubar";

const font = Font({ subsets: ["latin"] });

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className={`min-h-[100vh] bg-[#ffd670] ${font.className}`}>
      <Menubar />
      {children}
    </div>
  );
}
