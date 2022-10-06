import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { Link, usePage } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import DropdownMenu from "@/Components/DropdownMenu";

export default function Navbar() {
    const { auth, categories_global, carts_global_count } = usePage().props;
    return (
        <nav className="bg-white border-b py-2">
            <Container>
                <div className="flex items-center justify-between">
                    <ApplicationLogo />
                    <div className="flex items-center gap-x-6">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/products">Products</NavLink>
                        <DropdownMenu label={"Categories"}>
                            {categories_global.map((category) => (
                                <DropdownMenu.Link
                                    key={category.slug}
                                    href={`/products?category=${category.slug}`}
                                >
                                    {category.name}
                                </DropdownMenu.Link>
                            ))}
                        </DropdownMenu>
                        {auth.user ? (
                            <>
                                <DropdownMenu label={auth.user.name}>
                                    <DropdownMenu.Link href="/dashboard">
                                        Dashboard
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link href="/profile">
                                        Profile
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link href="/cart">
                                        Your cart
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link href="/history">
                                        Your history
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link
                                        href="/logout"
                                        method="post"
                                    >
                                        Logout
                                    </DropdownMenu.Link>
                                </DropdownMenu>
                                <NavLink
                                    className="flex items-center gap-x-2"
                                    href="/carts"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>
                                    {carts_global_count > 0
                                        ? carts_global_count
                                        : null}
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink href="/login">Log in</NavLink>
                                <NavLink href="/register">Register</NavLink>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    );
}
