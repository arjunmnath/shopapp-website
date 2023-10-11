import { UseFormReturn } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from "@/components/ui/input";

interface FormDataProps {
    form: UseFormReturn | any | undefined,
}
const AddresssSection = ({ form }: FormDataProps) => {
    return <>
        <h2 className="text-xl font-bold tracking-tight p-4 justify-start">Address Section</h2>
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