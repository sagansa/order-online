import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";

export default function Navbar() {
    const { auth } = usePage().props;
    return (
        <nav className="bg-white border-b py-2">
            <Container>
                <div className="flex items-center justify-between">
                    <ApplicationLogo />
                    <div className="flex items-center ap-x-6">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/dashboard">Dashboard</NavLink>
                        {auth.user ? (
                            <>
                                <NavLink href="/profile">
                                    {auth.user.name}
                                </NavLink>
                                <NavLink href="/logout" method="post">
                                    Logout
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
