import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";
import Container from "@/Components/Container";
import { numberFormat } from "@/Libs/helper";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import Table from "@/Components/Table";
import Card from "@/Components/Card";
import DropdownMenu from "@/Components/DropdownMenu";

export default function Index({ carts }) {
    const onDeleteHandler = (cart_id) => {
        Inertia.delete(
            route("cart.delete", cart_id),
            {},
            {
                onSuccess: () => toast.success("Removed"),
            }
        );
    };

    let subtotal = carts.reduce((acc, cart) => acc + cart.price, 0);
    let ppn = (11 / 100) * subtotal;
    let total = ppn + subtotal;

    return (
        <div>
            <Head title="Your carts" />
            <Header
                title="Your carts"
                description="The product was added to the cart"
            />
            <Container>
                <Card>
                    <Card.Header>Your cart</Card.Header>
                    <Card.Table>
                        <Table>
                            <Table.Thead>
                                <tr>
                                    <Table.Th className={"w-0"}>#</Table.Th>
                                    <Table.Th>Name</Table.Th>
                                    <Table.Th>Price</Table.Th>
                                    <Table.Th></Table.Th>
                                </tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {carts.length ? (
                                    <>
                                        {carts.map((cart, i) => (
                                            <tr key={cart.id}>
                                                <Table.Td className={"w-0"}>
                                                    {i + 1}
                                                </Table.Td>
                                                <Table.Td>
                                                    <Link
                                                        href={`/products/${cart.product.slug}`}
                                                    >
                                                        {cart.product.name}
                                                    </Link>
                                                </Table.Td>
                                                <Table.Td className="text-right">
                                                    Rp{" "}
                                                    {numberFormat(cart.price)}
                                                </Table.Td>
                                                <Table.Td className="text-right">
                                                    <button
                                                        onClick={() =>
                                                            onDeleteHandler(
                                                                cart.id
                                                            )
                                                        }
                                                        className="focus.outline-none inline"
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
                                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                            />
                                                        </svg>
                                                    </button>
                                                </Table.Td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td></td>
                                            <Table.Td>PPN (11%)</Table.Td>
                                            <Table.Td className="text-right">
                                                Rp {numberFormat(ppn)}
                                            </Table.Td>
                                        </tr>
                                        <tr className="bg-blue-50 text-blue-900 font-semibold">
                                            <td></td>
                                            <Table.Td>Total</Table.Td>
                                            <Table.Td className="text-right">
                                                Rp{" "}
                                                {numberFormat(
                                                    carts.reduce(
                                                        (acc, cart) =>
                                                            acc + cart.price,
                                                        0
                                                    ) + ppn
                                                )}
                                            </Table.Td>
                                        </tr>
                                    </>
                                ) : (
                                    <Table.Empty
                                        colSpan={4}
                                        message={
                                            <>
                                                The cart is currently empty.
                                                <br />
                                                <Link
                                                    href="/products"
                                                    className="text-blue-500 underline"
                                                >
                                                    Try add new one
                                                </Link>
                                            </>
                                        }
                                    />
                                )}
                            </Table.Tbody>
                        </Table>
                    </Card.Table>
                </Card>
                <div className="mt-4 flex justify-end">
                    <DropdownMenu
                        buttonClassName="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        label="Payment method"
                    >
                        <DropdownMenu.Link
                            href="/invoice"
                            method="post"
                            as="button"
                            data={{
                                carts: carts,
                                total: total,
                                payment_type: "transfer_manual",
                                bank: "bank",
                            }}
                        >
                            Transfer Manual
                        </DropdownMenu.Link>
                        <DropdownMenu.Divider />
                        <DropdownMenu.Link
                            href="/invoice"
                            method="post"
                            as="button"
                            data={{
                                carts: carts,
                                total: total,
                                payment_type: "gopay",
                            }}
                        >
                            Gopay
                        </DropdownMenu.Link>
                        <DropdownMenu.Divider />
                        <DropdownMenu.Link
                            href="/invoice"
                            method="post"
                            as="button"
                            data={{
                                carts: carts,
                                total: total,
                                payment_type: "bank_transfer",
                                bank: "bca",
                            }}
                        >
                            BCA Virtual Account
                        </DropdownMenu.Link>
                        <DropdownMenu.Link
                            href="/invoice"
                            method="post"
                            as="button"
                            data={{
                                carts: carts,
                                total: total,
                                payment_type: "bank_transfer",
                                bank: "bni",
                            }}
                        >
                            BNI Virtual Account
                        </DropdownMenu.Link>
                    </DropdownMenu>
                </div>
            </Container>
        </div>
    );
}

Index.layout = (page) => <App children={page} />;
