import CsvDownloader from 'react-csv-downloader';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';

type DownloadDataProps =  {
    data: any;
    filename: string;
    headers: {
        displayName: string;
        id:string;
    }[]
}
const DownloadData = (props: DownloadDataProps) => {
    return <CsvDownloader 
    columns={props.headers} 
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