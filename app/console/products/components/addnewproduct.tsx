
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

interface addNewProductProps {
  setProductData: () => Promise<void>,

}

const AddNewProduct = (props: addNewProductProps) => {
  const stateContext = useContext(DataContext)
  const [name, setName] = useState('')
  const [cprice, setCPrice] = useState(0)
  const [sprice, setSPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const { toast } = useToast();
  const handleSubmit = async () => {
    if (name === '' || cprice <= 0 || cprice >= 2000 || sprice >= 2000 || cprice > sprice) {
      toast({
        title: "Oops!",
        description: "Invalid Price Or Name Received"
      })
    } else {
      const ProductData = {
        name: name,
        costPrice: cprice,
        sellingPrice: sprice,
        profit: sprice - cprice,
        stock: stock,
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
      const data = {
        ...ProductData,
        utx: localStorage.getItem('clitkn')
      }
      const res = await fetch('/api/products/addproduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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
  return (
    <Dialog open={menuOpen} onOpenChange={(open) => setMenuOpen(open)}>
      <DialogTrigger asChild>
        <Button variant='outline' >
          <Plus className="p-1" />
          Add Products</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              ProductName
            </Label>
            <Input id="name" value={name} onChange={e => { setName(e.target.value) }} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Initial Stock
            </Label>
            <Input id="name" value={stock} type="number" onChange={e => { setStock(parseInt(e.target.value)) }} placeholder="0" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="flex flex-row items-center gap-1">
              <Label htmlFor="name" className="text-right">
                CostPrice
              </Label>
              <IndianRupee className="w-4 h-4" />
            </div>
            <Input id="price" type="number" value={cprice} onChange={e => { setCPrice(parseInt(e.target.value)) }} placeholder="0" className="col-span-3" />
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <div className="flex flex-row items-center gap-1">
            <Label htmlFor="name" className="text-right">
              Selling Price
            </Label>
            <IndianRupee className="w-4 h-4" />
          </div>
          <Input id="price" type="number" value={sprice} onChange={e => { setSPrice(parseInt(e.target.value)) }} placeholder="0" className="col-span-3" />
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="button">
            <Plus className="p-1" />

            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddNewProduct;