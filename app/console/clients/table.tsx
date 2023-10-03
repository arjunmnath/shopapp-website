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
import { deleteProductAction } from "./deleteclient"
import { DataContext } from "./mainpage"
import { useToast } from "@/components/ui/use-toast"
type Clients = {
    clientName: string;
    email: string;
    phone: string;
    clientId: string;
    joinedOn: string;
    outstanding: number
}

const columns: ColumnDef<Clients>[] = [
    {
        accessorKey: 'clientId',
        header: 'Client ID',
        cell: ({ row }) => (
            <div>{row.getValue('clientId')}</div>),
        enableSorting: false,
        enableHiding: true,
    },
    {
        accessorKey: "clientName",
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
        cell: ({ row }) => {
            return <div>{row.getValue('clientName')}</div>
        },
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }) => (
            <div>{row.getValue('email')}</div>),
        enableSorting: false,
        enableHiding: true,
    },
    {
        accessorKey: 'phone',
        header: 'Phone Number',
        cell: ({ row }) => (
            <div>{row.getValue('phone')}</div>),
        enableSorting: false,
        enableHiding: true,
    },
    {
        accessorKey: "outstanding",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Oustanding Amount
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("outstanding"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
            }).format(amount)
            return <div className="font-medium mx-[1.8rem]">{formatted}</div>
        },
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "joinedOn",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Joined On
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div>{row.getValue('joinedOn')}</div>),
        enableSorting: true,
        enableHiding: true,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => (<TableActions row={row} />)
    },



]

const TableActions = (props: { row: any }) => {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)
    const [alertOpen, setAlertOpen] = useState(false)
    const stateContext = useContext(DataContext)
    const { toast } = useToast()
    return (<AlertDialog open={alertOpen} onOpenChange={(open) => setAlertOpen(open)}>
        <DropdownMenu key={props.row.getValue('clientId')}
            open={open} onOpenChange={(open) => {
                setOpen(open)
            }}>
            <DropdownMenuTrigger ref={dropdownRef} asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent key={props.row.getValue('clientId')} align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(`Name: ${props.row.getValue('name')}\n Price: ${props.row.getValue('price')}`)}
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
            event.preventDefault();
        }}>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently alter the data on the servers.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={e => setAlertOpen(false)}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={async () => {
                    const clientId: string = props.row.getValue('clientId')
                    stateContext.setClientData(stateContext.clientData.filter((ele) => ele.clientId != clientId))
                    toast({
                        title: "Deleting..."
                    })
                    const success = await deleteProductAction({ clientToken: localStorage.getItem('clitkn'), clientId: clientId, setdata: stateContext.fetchClientData })
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
    </AlertDialog >)
}


export {
    columns
}