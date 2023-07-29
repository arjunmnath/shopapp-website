import CsvDownloader from 'react-csv-downloader';
import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';

type DownloadDataProps =  {
    data: any;
    filename: string;
}

const headers = [
    { displayName: "ProductId", id: 'productId', },
    { displayName: "ProductName", id: 'name', },
    { displayName: "Current Stock", id: 'stock' },
    { displayName: "Cost Price", id: 'costPrice', },
    { displayName: "Selling Price", id: 'sellingPrice', },
    { displayName: "Profit", id: 'profit', },
    { displayName: "Last Stock Update", id: 'stockUpdate' }
]

const DownloadData = (props: DownloadDataProps) => {
    return <CsvDownloader 
    columns={headers} 
    datas={props.data} 
    filename={props.filename} 
    extension='.csv' 
    separator=','>
        <Button variant="secondary">
            <DownloadIcon className="p-1" />
        </Button>
    </CsvDownloader>

}


export default DownloadData