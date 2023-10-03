import fernet from 'fernet';
import crypto from 'crypto';
import cryptojs from 'crypto-js'

const Encrypt = (message: string, secret: any) => {
    const key = new fernet.Secret(secret)
    const token = new fernet.Token({
        secret: key
    })
    if (message !== '') {
        return token.encode(message).toString()
    } else {
        return ''
    }
}

const Decrypt = (hash:string, secret:any) => {
try{
    const key = new fernet.Secret(secret)
    const token = new fernet.Token({
        secret: key,
        token: hash,
        ttl: 0
    })
    if (hash !== '') {
        return token.decode()

    } else {
        return ''
    }
} catch (error) {
    console.log(error)
    return ''
}
}

const generateKey = () => {
    return crypto.randomBytes(32).toString('base64')
}

export {
    Encrypt,
    Decrypt,
    generateKey
}