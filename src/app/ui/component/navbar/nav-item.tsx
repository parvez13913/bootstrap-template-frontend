import Link from "next/link";

export const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <Link href={href} className="text-white hover:text-gray-300">
        {label}
      </Link>
    </li>
  );
};
