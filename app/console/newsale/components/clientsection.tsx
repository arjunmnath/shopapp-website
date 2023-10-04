import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import type { Clients } from "@/types/clients";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import AddNewClient from "@/components/addnewclient";
interface clientDetailsProps {
    form: UseFormReturn | any | undefined,
    clients: Clients,
    isFetching: boolean,
    fetchData: () => void,
}
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Fetching from '@/components/fetching'
import { Delete } from "lucide-react";

const ClientDetails: React.FC<clientDetailsProps> = ({ form, clients, isFetching, fetchData }: clientDetailsProps): JSX.Element => {
    'use client';
    const [popOverOpen, setPopOverOpen] = useState<boolean>(false)
    return <>
        <h2 className="text-xl font-bold tracking-tight p-4 justify-start">Client Details</h2>
        <div className="flex flex-col gap-4 w-4/5">
            <FormField
                control={form.control}
                name="clientId"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <div className="flex justify-between">
                            <div className="flex items-center gap-4">
                                <FormLabel>Name</FormLabel>
                                <Popover open={popOverOpen} onOpenChange={(open) => setPopOverOpen(open)}>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-[200px] justify-between",
                                                    !field.value && "text-muted-foreground",
                                                    form.getValues('clientId') != undefined ? 'border-[#2faa24b6]' : '',
                                                )}
                                            >
                                                {field.value
                                                    ? clients.find(
                                                        (client) => client.clientId === field.value
                                                    )?.clientName
                                                    : "Select client"}
                                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        {isFetching ?
                                            <Fetching /> :
                                            <Command >
                                                <CommandInput
                                                    placeholder="Search Client..."
                                                    className="h-9"
                                                />
                                                <CommandEmpty>No Clients found.</CommandEmpty>
                                                <CommandGroup>
                                                    {clients.map((client) => (
                                                        <CommandItem
                                                            value={client.clientName}
                                                            key={client.clientId}
                                                            onSelect={() => {
                                                                setPopOverOpen(false);
                                                                form.setValue("clientId", client.clientId)
                                                                form.setValue("email", client.email)
                                                                form.setValue("phone", client.phone)
                                                            }}
                                                        >
                                                            {client.clientName}
                                                            <CheckIcon
                                                                className={cn(
                                                                    "ml-auto h-4 w-4",
                                                                    client.clientId === field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </Command>}
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                                <Button variant='ghost' onClick={(e) => {
                                    e.preventDefault();
                                    form.setValue("clientId", undefined)
                                    form.setValue("email", undefined)
                                    form.setValue("phone", undefined)
                                }}><Delete /></Button>
                            </div>
                            <AddNewClient FetchClientData={fetchData} />
                        </div>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                    return <FormItem>
                        <div className="flex items-center gap-4">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input disabled={true} className={form.getValues('email') != undefined ? 'border-[#3cca2f]' : ''} value={form.getValues('email')} form="NewSaleFrom" />
                            </FormControl>
                        </div>
                        <FormMessage />
                    </FormItem>
                }}
            />
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => {
                    console.log(form.getValues('phone'));
                    return <FormItem>
                        <div className="flex items-center gap-4">
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input disabled={true} className={form.getValues('phone') != undefined ? 'border-[#3cca2f]' : ''} value={form.getValues('phone')} form="NewSaleFrom" />
                            </FormControl>
                        </div>
                        <FormMessage />
                    </FormItem>
                }}
            />
        </div>
    </>
}

export default ClientDetails;