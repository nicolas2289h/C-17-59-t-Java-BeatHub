import Link from "next/link";

export const FooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: { href: string; title: string }[];
}) => {
  return (
    <div>
      <h3 className="text-sm">{title}</h3>
      <ul className="flex flex-col">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-sm text-primario opacity-55 hover:opacity-100 duration-100 ease-in-out"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
