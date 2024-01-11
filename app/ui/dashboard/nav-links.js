import Link from "next/link";

const links = [
    { home: 'Home', href: '/dashboard'},
    { name: 'Products', href: '/dashboard/products'},
    { name: 'Orders', href: '/dashboard/orders'},
]

export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                    >
                        <p>{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}