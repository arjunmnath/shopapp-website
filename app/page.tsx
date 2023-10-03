
import CheckLogin from "@/lib/verify"

export default function App () {
    CheckLogin({next:'/console/dashboard'})
    
}