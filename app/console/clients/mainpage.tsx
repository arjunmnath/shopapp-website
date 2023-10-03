'use client'

import { useState, useEffect, SetStateAction, Dispatch } from "react";
import React from "react";
import type { Clients } from "@/types/clients";
import dynamic from "next/dynamic";
import { Suspense } from "react";
type DataContextType = {
  clientData: Clients,
  fetchClientData: () => Promise<void>,
  setClientData: Dispatch<SetStateAction<Clients>>
}


export const DataContext = React.createContext<DataContextType>({
  clientData: [],
  setClientData: () => { },
  fetchClientData: async () => { }
})
const Page = () => {
  const [clients, setClients] = useState<Clients>([])
  const [mounted, setMounted] = useState(false)
  const Encrypt = dynamic(() => import('@/lib/encryption').then(res => res.Encrypt))
  const Decrypt = dynamic(() => import('@/lib/encryption').then(res => res.Decrypt))
  const Loading = dynamic(() => import('@/components/loading'), {
    suspense: true
  })
  const Empty = dynamic(() => import('@/components/empty'), {
    suspense: true
  })
  const ClientMenu = dynamic(() => import('./clientmenu'), {
    suspense: true
  });
  const AddNewClient = dynamic(() => import('@/components/addnewclient'), {
    suspense: true
  });
  const fetchDataServer = async () => {
    const Encrypt = await import('@/lib/encryption').then((res) => res.Encrypt)
    const key = localStorage.getItem('krone')
    if (key == null) {
      const resKey = await fetch('/api/crypto/getkey')
      const data = await resKey.json()
      localStorage.setItem('krone', data.key)
    }
    const res = await fetch(`/api/clients?utx=${localStorage.getItem('clitkn')}`)
    const data = await res.json();
    setClients(data.data);
    setMounted(true)
    localStorage.setItem('tinsel', Encrypt(JSON.stringify(data.data), key))
  }
  const fetchDataOffline = async (localClients: string, localFernetKey: string) => {
    const Decrypt = await import('@/lib/encryption').then(res => res.Decrypt)
    setClients(JSON.parse(Decrypt(localClients, localFernetKey)))
    setMounted(true)
  }
  useEffect(() => {
    const localClients = localStorage.getItem('tinsel')
    let localFernetKey = localStorage.getItem('krone')
    if (localClients != null && localFernetKey != null) {
      fetchDataOffline(localClients, localFernetKey)
    } else {
      fetchDataServer()
    }
  }, []);

  return <>

    <DataContext.Provider value={{
      clientData: clients,
      fetchClientData: fetchDataServer,
      setClientData: setClients
    }}><Suspense fallback={<Loading />}>
        {mounted ? clients.length === 0 ? <div className="flex flex-col justify-center items-center">
          <Empty />
          <h2 className="text-lg font-bold tracking-tight p-4">Your Client List Is Empty</h2>
          <AddNewClient />
        </div> : <ClientMenu />
          : <Loading />
        }
      </Suspense>
    </DataContext.Provider>
  </>

}


export default Page;

