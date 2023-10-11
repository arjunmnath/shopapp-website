import { UseFormReturn } from "react-hook-form";
import { useState } from "react";
import type { Products } from "@/types/product";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

interface ProductSectionProps {
    form: UseFormReturn | any | undefined,
    products: Products,
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
import Loading from '@/components/loading'
import { Delete } from "lucide-react";

const ProductSection = ({ form, products, isFetching, fetchData }: ProductSectionProps) => {
    const [popOverOpen, setPopOverOpen] = useState<boolean>(false)
    return <>
        <h2 className="text-xl font-bold tracking-tight p-4 justify-start">Product Details</h2>
        <div className="flex flex-col gap-4 w-4/5">
            <FormField
                control={form.control}
                name="productId"
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
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? products.find(
                                                        (client) => client.productId === field.value
                                                    )?.productName
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
                                                <CommandEmpty>No products found.</CommandEmpty>
                                                <CommandGroup>
                                                    {products.map((client) => (
                                                        <CommandItem
                                                            value={client.productName}
                                                            key={client.productId}
                                                            onSelect={() => {
                                                                setPopOverOpen(false);
                                                                form.setValue("productId", client.productId)
                                                                form.setValue('sellingPrice', client.sellingPrice)
                                                            }}

                                                        >
                                                            {client.productName}
                                                            <CheckIcon
                                                                className={cn(
                                                                    "ml-auto h-4 w-4",
                                                                    client.productId === field.value
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
                                    form.setValue("productId", undefined)
                                    form.setValue("sellingPrice", undefined)
                                }}><Delete /></Button>
                            </div>
                        </div>
                    </FormItem>
                )}
            />
            <div className="flex gap-8">
                <FormField

                    control={form.control}
                    name="sellingPrice"
                    render={({ field }) => {
                        return <FormItem className="w-1/2">
                            <div className="flex items-center gap-4">
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input disabled={true} value={form.getValues('sellingPrice')} form="NewSaleFrom" />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    control={form.control}
                    name="qty"
                    render={({ field }) => {
                        return <FormItem className="w-1/2">
                            <div className="flex items-center gap-4">
                                <FormLabel>Quantity</FormLabel>
                                <FormControl>
                                    <Input type='number'
                                        name={field.name}
                                        ref={field.ref}
                                        value={field.value}
                                        onBlur={field.onBlur}
                                        onChange={(e) => {
                                            form.setValue(field.name, parseInt(e.target.value, 10));
                                        }}
                                        form="NewSaleFrom" />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    }}
                />
            </div>
        </div>
    </>
}

export default ProductSection;





