import { Link } from "@inertiajs/inertia-react";
import clsx from "clsx";
import React from "react";

export default function Pagination({ meta, links }) {
    return (
        <div className="flex items-center justify-center gap-2 mt-10">
            {meta.links.map((link, i) => (
                <div key={i}>
                    <Link
                        key={i}
                        href={link.url}
                        className={clsx(
                            link.active && "text-blue-500",
                            "text-black"
                        )}
                    >
                        {link.label}
                    </Link>
                </div>
            ))}
        </div>
    );
}
