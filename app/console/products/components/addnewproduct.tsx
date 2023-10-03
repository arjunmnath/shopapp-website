
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast, useToast } from "@/components/ui/use-toast";
import { useState, useEffect, useContext } from "react";
import { Plus, IndianRupee } from 'lucide-react'
import { DataContext } from "../mainpage";
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import type {Clients} from '@/types/clients'
import { Dispatch, SetStateAction } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"

interface addNewProductProps {
  setProductData: () => Promise<void>,

}

const AddNewProduct = (props: addNewProductProps) => {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    cprice: z.number().min(0).max(2000),
    sprice: z.number().min(0).max(2000),
    stock: z.number().min(0).max(500),
  })
  const stateContext = useContext(DataContext)

  const [menuOpen, setMenuOpen] = useState(false)
  const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stock: 0
    },
  })


  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data)
    if (data.cprice > data.sprice) {
      toast({
        title: "Oops!",
        description: "Invalid Price Or Name Received"
      })
    } else {
      const ProductData = {
        productName: data.name,
        costPrice: data.cprice,
        sellingPrice: data.sprice,
        profit: data.sprice - data.cprice,
        stock: data.stock,
        productId: '',
        stockUpdate: ''
      }
      const newData = [...stateContext.productData]
      newData.push(ProductData)
      stateContext.setProductData(newData)
      setMenuOpen(false)
      toast({
        title: "Saving...",
      })
      const requestPayload= {
        ...ProductData,
        utx: localStorage.getItem('clitkn')
      }
      const res = await fetch('/api/products/addproduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestPayload)
      })
      const content = await res.json();
      console.log(content.message)
      if (content.success) {
        toast({
          title: "Way To Go!",
          description: "Product Has Been Successfully Added!",
        })
        stateContext.fetchProductData()

      } else if (content.code === 404) {
        toast({
          title: "Oops!",
          description: "Something Went Wrong, Try Logging In Again!",
          variant: 'destructive'
        })
      } else {
        toast({
          title: "Oops!",
          description: "Something Went Wrong",
          variant: "destructive"
        })
      }
    }
    }
  
  return (<>
        <Dialog open={menuOpen} onOpenChange={(open) => setMenuOpen(open)}>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Plus className="p-1" />
          Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form>
            <div className="flex flex-col gap-4">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input  {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sprice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Selling Price</FormLabel>
                    <div className="flex gap-4 items-center">
                      <span ><IndianRupee/></span>
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
                )}
              />
              <FormField
                control={form.control}
                name="cprice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cost Price</FormLabel>
                    <div className="flex gap-4 items-center">
                      <span ><IndianRupee/></span>
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
                )}
              />
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <div className="flex gap-4 items-center">
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
                )}
              />
            </div>
            <DialogFooter>
              <Button onClick={form.handleSubmit(onSubmit)} className="mt-2" >
                <Plus className="p-1" />
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>

    </>
  )
                                          }

export default AddNewProduct;









// interface AddNewClientProps {
//   FetchClientData?: ()=>void
// }

// const AddNewClient = ({FetchClientData = ()=>{}}:AddNewClientProps) => {
//   const stateContext = useContext(DataContext)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const { toast } = useToast();


//   const formSchema = z.object({
//     clientName: z.string().min(2).max(50),
//     email: z.string().email(),
//     phone: z.number().min(10).max(10),
//   })



//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       clientName: "",
//       email: "",
//     },
//   })
//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     const newData = [...stateContext.clientData]
//     newData.push({ ...values, clientId: '', joinedOn: '', outstanding:0});
//     stateContext.setClientData(newData)
//     setMenuOpen(false)
//     toast({
//       title: "Saving...",
//     })
//     const data = {
//       ...values,
//       outstanding:0,
//       utx: localStorage.getItem('clitkn')
//     }
//     const res = await fetch('/api/clients/addclient', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     const content = await res.json();
//     console.log(content.message)
//     if (content.success) {
//       toast({
//         title: "Way To Go!",
//         description: "Client Has Been Successfully Added!",
//       })
//       FetchClientData()
//       stateContext.fetchClientData()

//     } else if (content.code === 404) {
//       toast({
//         title: "Oops!",
//         description: "Something Went Wrong, Try Logging In Again!",
//         variant: 'destructive'
//       })
//     } else {
//       toast({
//         title: "Oops!",
//         description: "Something Went Wrong",
//         variant: "destructive"
//       })
//     }
//   }

//   return (
//     <Dialog open={menuOpen} onOpenChange={(open) => setMenuOpen(open)}>
//       <DialogTrigger asChild>
//         <Button variant='outline'>
//           <Plus className="p-1" />
//           Add Client</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <Form {...form}>
//           <form>
//             <div className="flex flex-col gap-4">
//               <DialogHeader>
//                 <DialogTitle>Add New Client</DialogTitle>
//               </DialogHeader>

//               <FormField
//                 control={form.control}
//                 name="clientName"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Name</FormLabel>
//                     <FormControl>
//                       <Input  {...field}/>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input placeholder="mail@example.com" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="phone"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Phone</FormLabel>
//                     <div className="flex gap-4 items-center">
//                       <span >+91</span>
//                       <FormControl>
//                         <Input type='number'
//                                             name={field.name}
//                                             ref={field.ref}
//                                             value={field.value}
//                                             onBlur={field.onBlur}
//                                             onChange={(e) => {
//                                                 form.setValue(field.name, parseInt(e.target.value, 10));
//                                             }}
//                                             form="NewSaleFrom" />
//                       </FormControl>
                      
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <DialogFooter>
//               <Button onClick={form.handleSubmit(onSubmit)} className="mt-2" >
//                 <Plus className="p-1" />
//                 Add
//               </Button>
//             </DialogFooter>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default AddNewClient;