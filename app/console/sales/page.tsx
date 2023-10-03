import { cookies } from "next/headers";

const Dashboard = () => {
    const cookieStore = cookies()
    console.log(cookieStore.getAll())
    return <>Sales Page</>
}

export default Dashboard;