'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
interface deleteProdcutProps {
  clientToken: string | null,
  productId: string,
  setdata: () => Promise<void>
}

import { useToast } from "@/components/ui/use-toast"


const DeleteProduct = () => {
  return <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Edit Profile</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
}


const deleteProductAction = async (props: deleteProdcutProps) => {
  const res = await fetch('/api/products/deleteproduct', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      utx: props.clientToken,
      productId: props.productId
    })
  })
  const content = await res.json();
  await props.setdata();
  console.log(content.message);
  if (content.code === 200) { 
    return true 
  } else {
    return false
  }
}



export {
  deleteProductAction
};