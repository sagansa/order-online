import { Menu } from "@headlessui/react";
import { InertiaLink } from "@inertiajs/inertia-react";
import clsx from "clsx";

function Link({ href, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <InertiaLink
                    {...props}
                    className={clsx(
                        active && "bg-gray-100 text-black",
                        "w-full block text-left text-gray-600 py-1.5 px-3 text-sm"
                    )}
                    href={href}
                >
                    {children}
                </InertiaLink>
            )}
        </Menu.Item>
    );
}

function DropdownMenu({ label, children }) {
    return (
        <Menu className="relative" as="div">
            {({ open }) => (
                <>
                    <Menu.Button className="flex items-center gap-x-2">
                        {label}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={clsx(
                                "w-5 h-5",
                                open && "rotate-180 transition duration-200"
                            )}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Menu.Button>
                    <Menu.Items className="bg-white py-1 rounded-lg shadow-sm border absolute w-64 top-full mt-2 right-0 overflow-hidden">
                        {children}
                    </Menu.Items>
                </>
            )}
        </Menu>
    );
}

DropdownMenu.Link = Link;
export default DropdownMenu;
