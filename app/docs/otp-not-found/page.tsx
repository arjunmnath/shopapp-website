const Page = () => {
    const uri: any = process.env.NODE_ENV === 'development' ? process.env.MONGODB_URI : process.env.MONGODB_URI_VERCEL;
    return <>Help Page <br/> {uri}</>
}

export default Page;