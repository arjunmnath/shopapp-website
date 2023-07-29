import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import {
    CaretSortIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"

import { useContext, useRef, useState } from "react"
import { deleteProductAction } from "./deleteproduct"
import { DataContext } from "./mainpage"
import { useToast } from "@/components/ui/use-toast"
type Product = {
    productId: string,
    name: string,
    stock: number,
    costPrice: number,
    sellingPrice: number,
    profit: number,
    stockUpdate: string
}

const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'productId',
        header: 'Product ID',
        cell: ({ row }) => (
            <div>{row.getValue('productId')}</div>),
        enableSorting: false,
        enableHiding: true,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div>{row.getValue('name')}</div>),
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "stock",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Stock
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="mx-[1.6rem]">{row.getValue('stock')}</div>),
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "costPrice",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Cost Price
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("costPrice"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
            }).format(amount)
            return <div className="font-medium mx-[1.8rem]">{formatted}</div>
        },
        enableSorting: true,
        enableHiding: true,
    }, {
        accessorKey: "sellingPrice",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Selling Price
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("sellingPrice"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
            }).format(amount)
            return <div className="font-medium mx-[2rem]">{formatted}</div>
        },
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "profit",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Profit
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("profit"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
            }).format(amount)
            return <div className="font-medium mx-[1.4rem]">{formatted}</div>
        },
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "stockUpdate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Stock Updated On
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div>{row.getValue('stockUpdate')}</div>),
        enableSorting: true,
        enableHiding: true,
    }, {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const [open, setOpen] = useState(false)
            const dropdownRef = useRef(null)
            const [alertOpen, setAlertOpen] = useState(false)
            const stateContext = useContext(DataContext)
            const { toast } = useToast()
            return (<AlertDialog open={alertOpen} onOpenChange={(open) => setAlertOpen(open)}>
                <DropdownMenu key={row.getValue('productId')}
                    open={open} onOpenChange={(open) => {
                        setOpen(open)
                    }}>
                    <DropdownMenuTrigger ref={dropdownRef} asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent key={row.getValue('productId')} align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(`Name: ${row.getValue('name')}\n Price: ${row.getValue('price')}`)}
                        >
                            Copy Product Details
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Show Stock History</DropdownMenuItem>
                        <DropdownMenuItem>Edit Price</DropdownMenuItem>
                        <DropdownMenuItem>Add New Supply Batch</DropdownMenuItem>
                        <DropdownMenuItem onClick={e => setAlertOpen(true)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <AlertDialogContent onCloseAutoFocus={(event) => {
                    // dropdownRef.current?.focus();
                    event.preventDefault();
                }}>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={e => setAlertOpen(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={async () => {
                            const productId: string = row.getValue('productId')
                            stateContext.setProductData(stateContext.productData.filter((ele) => ele.productId != productId))
                        toast({
                            title: "Deleting..."
                            })

                        const success = await deleteProductAction({clientToken: localStorage.getItem('clitkn'), productId: productId, setdata: stateContext.fetchProductData })
                        console.log(success)
                        if (success) {
                            toast({
                                title: "Good Job!!",
                                description: "Product deleted successfully"
                            })
                        } else {
                            toast({
                                title: "Oops!!",
                                description: "Something Went Wrong",
                                variant: 'destructive'
                            })
                        }

                        }}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog >
            )
        },
    },



]


export {
    columns
}