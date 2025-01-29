import Link from "next/link";

export const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <li className="relative">
      <Link
        href={href}
        className="text-white hover:text-white/90 transition-colors group"
      >
        {label}
        <span className="absolute inset-x-0 -top-5 h-[1px] bg-white scale-x-0 transition-transform group-hover:scale-x-100" />
      </Link>
    </li>
  );
};
