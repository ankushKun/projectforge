import useCart from "@/hooks/useCart";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";

const menuLinks = [
  {
    text: "Hardware Projects",
    link: "/hardware",
  },
  {
    text: "Software Projects",
    link: "/software",
  },
];

export default function Menubar() {
  const { cart } = useCart();

  return (
    <div className="flex items-center justify-between p-5">
      <Link
        href="/"
        className="p-2 text-center text-4xl font-extrabold drop-shadow-lg transition-all duration-200 hover:font-light hover:tracking-widest"
      >
        🛠 ProjectForge
      </Link>
      <button className="relative transition-all duration-200 hover:scale-105 active:scale-95">
        <RiShoppingCart2Fill size={40} className="drop-shadow-lg" />
        <div className="absolute bottom-0 top-1.5 w-full text-center text-sm text-white">
          {cart.length}
        </div>
      </button>
    </div>
  );
}
