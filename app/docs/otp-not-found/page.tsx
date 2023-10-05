const Page = () => {
    const uri = process.env.MONGODB_URI;
    return <>Help Page <br/> {uri}</>
}

export default Page;