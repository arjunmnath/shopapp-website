import { useEffect, useState } from "react"
import { UseFormReturn } from "react-hook-form"
import type { Clients } from "@/types/clients";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import AddNewClient from "@/components/addnewclient";
import { Textarea } from "@/components/ui/textarea"

interface clientDetailsProps {
    form: UseFormReturn | any | undefined,
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

const AddresssSection = ({ form }: clientDetailsProps) => {
    return <>
        <h2 className="text-xl font-bold tracking-tight p-4 justify-start">Particulars</h2>
        <div className="flex flex-col gap-4 w-4/5">
            <div className="flex flex-row w-full gap-4  ">
                <FormField
                    control={form.control}
                    name="sitename"
                    render={({ field }) => {
                        return <FormItem className="w-1/2">
                            <div className="flex items-center gap-4">
                                <FormLabel>Site</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    control={form.control}
                    name="streetaddress"
                    render={({ field }) => {
                        return <FormItem className="w-1/2">
                            <div className="flex items-center gap-4">
                                <FormLabel>Street</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    }}
                />
            </div>
            <div className="flex flex-row w-full gap-4">
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => {
                        return <FormItem className="w-1/2">
                            <div className="flex items-center gap-4">
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => {
                        return <FormItem className="w-1/2">
                            <div className="flex items-center gap-4">
                                <FormLabel>District</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    }}
                />
            </div>
            <div className="flex flex-row w-full gap-4">
                <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => {
                        return <FormItem className="w-1/2">
                            <div className="flex items-center gap-4">
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    control={form.control}
                    name="pin"
                    render={({ field }) => {
                        return <FormItem className="w-1/2">
                            <div className="flex items-center gap-4">
                                <FormLabel>Pincode</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    }}
                />
            </div>
            <div className="flex flex-row w-full gap-4">
                <FormField
                    control={form.control}
                    name="driverName"
                    render={({ field }) => {
                        return <FormItem className="w-1/2">
                            <div className="flex items-center gap-4">
                                <FormLabel>Driver Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    control={form.control}
                    name="vehicleNo"
                    render={({ field }) => {
                        return <FormItem className="w-1/2">
                            <div className="flex items-center gap-4">
                                <FormLabel>Vehicle No.</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    }}
                />
            </div>
            <FormField
                control={form.control}
                name="remarks"
                render={({ field }) => {
                    return <FormItem>
                        <FormControl>
                            <Textarea {...field} placeholder="Remarks..." />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}
            />

        </div>
    </>
}

export default AddresssSection;