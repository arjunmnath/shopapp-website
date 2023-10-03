import { redirect } from 'next/navigation'

const CheckLogin = ({fallback='/signin', next=''}) => {
    if (typeof window !== 'undefined') {

        const clientToken = localStorage.getItem('clitkn');
        const _tmp: any = localStorage.getItem('iloin');
        const isLoggedIn = JSON.parse(_tmp)
        if (clientToken === null || isLoggedIn === null || !isLoggedIn.val) {
            redirect(fallback)
        } else if (next !== '') {
            redirect(next)
        }
    }
}

export default CheckLogin;