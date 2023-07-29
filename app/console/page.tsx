'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area";

import Link from 'next/link'
const Home = () => {
  return <div className='p-6'>

      <h2 className="text-3xl font-bold tracking-tight p-4">Dashboard</h2>
      <div className="flex flex-col">
        <Link href="/console/products">products page</Link>
      </div>
    </div>
}

export default Home;
