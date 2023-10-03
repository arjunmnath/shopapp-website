'use client'

import { useState, useEffect, SetStateAction, Dispatch } from "react";
import React from "react";
import type { Products } from "@/types/product";
import dynamic from "next/dynamic";
import { Suspense } from "react";


type DataContextType = {
  productData: Products,
  fetchProductData: () => Promise<void>,
  setProductData: Dispatch<SetStateAction<Products>>
}


export const DataContext = React.createContext<DataContextType>({
  productData: [],
  setProductData: () => { },
  fetchProductData: async () => { }
})
const Page = () => {
  const Loading = dynamic(() => import('@/components/loading'), {
    suspense: true,
  });
  const Empty = dynamic(() => import('@/components/empty'), {
    suspense: true,
  });
  const AddNewProduct = dynamic(() => import('./components/addnewproduct'), {
    suspense: true,
  });

  const ProductMenu = dynamic(() => import('./productmenu'), {
    suspense: true,
  })

  const [productData, setProductData] = useState<Products>([])
  const [mounted, setMounted] = useState(false)
  const fetchData = async () => {
    const res = await fetch(`/api/products/getdetails?utx=${localStorage.getItem('clitkn')}`)
    const data = await res.json();
    setProductData(data.data);
    setMounted(true)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <>
    <Suspense fallback={<Loading />}>
      {mounted ? productData.length === 0 ? <div className="flex flex-col justify-center items-center">
        <Empty />
        <h2 className="text-lg font-bold tracking-tight p-4">Your Product List Is Empty</h2>
        <AddNewProduct setProductData={fetchData} />
      </div> : <DataContext.Provider value={{
        productData: productData,
        fetchProductData: fetchData,
        setProductData: setProductData
      }}><ProductMenu setProductData={fetchData} data={productData} /> </DataContext.Provider>
        : <Loading />
      }
    </Suspense>
  </>

}


export default Page;

