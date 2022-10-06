import Container from "@/Components/Container";
import PrimaryButton from "@/Components/PrimaryButton";
import App from "@/Layouts/App";
import { numberFormat } from "@/Libs/helper";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";
import toast from "react-hot-toast";

export default function Show({ product }) {
    const addToCart = () => {
        Inertia.post(
            route("cart.store", product),
            {},
            {
                onSuccess: () => toast.success("Added to cart"),
            }
        );
    };
    return (
        <div>
            <Head title={product.name} />
            <Container>
                <div className="flex gap-10">
                    <div className="w-1/3">
                        <img
                            className="w-full rounded-lg"
                            src={product.picture}
                            alt=""
                        />
                    </div>
                    <div className="w-2/3 min-h-full flex flex-col justify-between">
                        <div className="flex-1">
                            <Link
                                className="text-xs font-semibold px-2 py-1 inline-flex bg-blue-500 text-white rounded"
                                href={`/products?category=${product.category.slug}`}
                            >
                                {product.category.name}
                            </Link>
                            <h1 className="text-3xl font-semibold">
                                {product.name}
                            </h1>
                            <div className="leading-relaxed text-gray-500 my-4">
                                {product.description}
                            </div>
                            <div className="font-semibold text-4xl">
                                <sup>Rp</sup>
                                {numberFormat(product.price)}
                            </div>
                        </div>

                        <PrimaryButton onClick={addToCart}>
                            Add to cart
                        </PrimaryButton>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
