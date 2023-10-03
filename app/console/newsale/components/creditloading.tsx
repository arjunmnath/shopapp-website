import { UseFormReturn } from "react-hook-form"
import { Label } from "@/components/ui/label"
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Checkbox } from "@/components/ui/checkbox"

const BinarySection = ({ form }: UseFormReturn | any | undefined) => {
  return (
    <div className="flex flex-row gap-4 p-2 m-2">
      <FormField
        control={form.control}
        name="loading"
        render={({ field }) => {
          return <FormItem>
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox id="terms2" defaultChecked={false} onCheckedChange={(check) => {
                    const val: any = check
                    form.setValue('loading', val);
                  }} />
                </FormControl>

                <Label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Loading Charge
                </Label>
              </div>
            </div>
            <FormMessage />
          </FormItem>
        }}
      />
      <FormField
        control={form.control}
        name="credit"
        render={({ field }) => {
          return <FormItem>
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox id="terms2" defaultChecked={false} onCheckedChange={(check) => {
                    const val: any = check
                    form.setValue('credit', val);
                  }} />
                </FormControl>

                <Label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Credit
                </Label>
              </div>
            </div>
            <FormMessage />
          </FormItem>
        }}
      />
    </div>
  )
}

export default BinarySection;