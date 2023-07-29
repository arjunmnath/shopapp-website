'use client'

import { useState, useEffect, SetStateAction, Dispatch } from "react";
import AddNewProduct from "./components/addnewproduct";
import Loading from '@/components/loading'
import Empty from '@/components/empty';
import React from "react";
import ProductMenu from "./productmenu";

type productDataType = Array<{
  productId: string,
  name: string,
  stock: number,
  costPrice: number,
  sellingPrice: number,
  profit: number,
  stockUpdate: string
}>

type DataContextType = {
  productData: productDataType,
  fetchProductData: () => Promise<void>,
  setProductData: Dispatch<SetStateAction<productDataType>>
}


export const DataContext = React.createContext<DataContextType>({
  productData: [],
  setProductData: () => { },
  fetchProductData: async () => { }
})
const Page = () => {
  const [productData, setProductData] = useState<productDataType>([])
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

  return <> {mounted ? productData.length === 0 ? <div className="flex flex-col justify-center items-center">
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
  </>

}


export default Page;

