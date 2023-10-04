"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Form } from "@/components/ui/form"
import { useState, useEffect, Suspense } from 'react'
import type { Products } from "@/types/product"
import type { Clients } from '@/types/clients'
import dynamic from "next/dynamic"


const Page = () => {
  const FormSchema = z.object({
    clientId: z.string({
      required_error: "Please select a client.",
    }),
    productId: z.string({
      required_error: "Please select a Product.",
    }),
    email: z.string().email(),
    phone: z.number().min(1000000000).max(9999999999),
    loading: z.boolean(),
    credit: z.boolean(),
    sellingPrice: z.number().min(10).max(2000),
    qty: z.number().min(0).max(300),
    sitename: z.string().min(5).max(250),
    streetaddress: z.string().min(5).max(250),
    city: z.string().min(5).max(250),
    district: z.string().min(5).max(250),
    state: z.string().min(5).max(250),
    pin: z.number().min(550000).max(700000),
    driverName: z.string().min(5).max(100),
    vehicleNo: z.string().min(5).max(12),
    remarks: z.string()
  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      loading: false,
      credit: false,
      sellingPrice: 0,
      qty: 0,
      state: "Kerala",
      city: "Pazhayannur",
      pin: 680587,
      district: "Thrissur"
    }
  })
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const requestPayload = {
      utx: localStorage.getItem('clitkn'),
      clientId: data.clientId,
      address: {
        sitename: data.sitename,
        streetaddress: data.streetaddress,
        city: data.city,
        district: data.district,
        state: data.state,
        pin: data.pin
      },
      carrier: {
        name: data.driverName,
        vehicleNo: data.vehicleNo,
      },
      product: {
        productId: data.productId,
        qty: data.qty,
      },
      remarks: data.remarks,
      credit: data.credit,
      loading: data.loading,
    }
    const res = await fetch('/api/newsale', {
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
        description: "New Sale Added!",
      })
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
  const [products, setProducts] = useState<Products>([])
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [clients, setClients] = useState<Clients>([])
  const fetchDataServer = async () => {
    const Encrypt = await import('@/lib/encryption').then(res => res.Encrypt)
    const key = localStorage.getItem('krone')
    if (key == null) {
      const resKey = await fetch('/api/crypto/getkey')
      const data = await resKey.json()
      localStorage.setItem('krone', data.key)
    }
    const res = await fetch(`/api/newsale/getdetails?utx=${localStorage.getItem('clitkn')}`)
    const data = await res.json();
    console.log(data.message)
    setProducts(data.data.products);
    setClients(data.data.clients);
    setIsFetching(false)
    localStorage.setItem('opus', Encrypt(JSON.stringify(data.data.products), key))
    localStorage.setItem('tinsel', Encrypt(JSON.stringify(data.data.clients), key))
  }
  const FetchDataOffline = async (localProducts: string, localClients: string, localFernetKey: string) => {
    const Decrypt = await import('@/lib/encryption').then(res => res.Decrypt)
    setProducts(JSON.parse(Decrypt(localProducts, localFernetKey)))
    setClients(JSON.parse(Decrypt(localClients, localFernetKey)))
    setIsFetching(false)
  }
  useEffect(() => {
    setIsFetching(true)
    const localProducts = localStorage.getItem('opus')
    const localClients = localStorage.getItem('tinsel')
    let localFernetKey = localStorage.getItem('krone')
    if (localProducts != null && localClients != null && localFernetKey != null) {
      FetchDataOffline(localProducts, localClients, localFernetKey)
    } else {
      fetchDataServer()
    }
  }, [])

  const ClientDetails = dynamic(() => import('./components/clientsection'), {
    suspense: true
  })
  const ProductSection = dynamic(() => import('./components/productdetails'), {
    suspense: true
  });
  const BinarySection = dynamic(() => import('./components/creditloading'), {
    suspense: true
  });
  const AddressSection = dynamic(() => import('./components/addresssection'), {
    suspense: true
  });
  // TODO: Create a New Api for this Page ✅
  return (
    <div className="w-full ml-10">
      <Form {...form}>
        <form>
          <h2 className="text-3xl font-bold tracking-tight pt-8 pl-12">New Sale</h2>
          <div className="flex flex-col justify-items-center items-center">
            <ClientDetails form={form} clients={clients} isFetching={isFetching} fetchData={fetchDataServer} />
            <ProductSection form={form} products={products} isFetching={isFetching} fetchData={fetchDataServer} />
            <AddressSection form={form} />
            <BinarySection form={form} />
            <Button className="mb-4" onClick={form.handleSubmit(onSubmit)} >Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Page;