import { MongoClient, ServerApiVersion } from 'mongodb';



const uri: any = process.env.MONGODB_URL
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
    tls: true,
}
);

interface writeProps {
    data: Array<{ [key: string]: any }>,
    collection: string
}

interface createCollectionProps {
    name: string
}

interface readProps {
    collection: string
    query: { [key: string]: any }
}

interface updateProps {
    collection: string,
    query: { [key: string]: any },
    newdata: { [key: string]: any }
}

interface deleteManyProps {
    query: { [key: string]: any },
    collection: string
}


const writeData = async (params: writeProps) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const coll = db.collection(params.collection);
        await coll.insertMany(params.data);
    } finally {
        await client.close();

    }
}

const readDataMany = async (params: readProps) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const coll = db.collection(params.collection);
        const res: any = await coll.find(params.query).toArray()
        return res.map((obj: { _id?: string; }) => {
            delete obj['_id']
            return obj
        })
    } finally {
        await client.close()
    }
}

const readDataOne = async (params: readProps) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const coll = db.collection(params.collection);
        const res = await coll.findOne(params.query)
        return res

    } finally {
        await client.close()
    }
}



const updateDataOne = async (params: updateProps) => {
    try {
        await client.connect()
        const db = client.db(process.env.DB_NAME);
        const coll = db.collection(params.collection);
        const res = await coll.updateOne(params.query, {
            $set: params.newdata
        })
        return res
    } finally {
        await client.close()
    }
}


const deleteDataMany = async (params: deleteManyProps) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME)
        const coll = db.collection(params.collection)
        const res = await coll.deleteMany(params.query)
        return res
    } finally {
        await client.close();
    }
}
const deleteDataOne = async (params: deleteManyProps) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME)
        const coll = db.collection(params.collection)
        const res = await coll.deleteOne(params.query)
        return res
    } finally {
        await client.close();
    }
}


const readDataManyMultiple = async (params: readProps[]) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        let data:{ [key: string]: any } = {}
        await Promise.all(params.map(async (param) => {
            const index = param.collection.split('-')[1]
            const coll = db.collection(param.collection)
            const res: any = await coll.find(param.query).toArray()
            data[index] = res.map((obj: { _id?: string; }) => {
                delete obj['_id']
                return obj
            })
        }))
        return data
    } finally {
        await client.close()
    }
}


const createCollection = async (params: createCollectionProps) => {
    try {
        await client.connect()
        const db = client.db(process.env.DB_NAME)
        const res = await db.createCollection(params.name)
        return res
    } finally {
        await client.close()
    }
}

export {
    writeData,
    readDataOne,
    readDataMany,
    updateDataOne,
    deleteDataMany,
    createCollection,
    deleteDataOne,
    readDataManyMultiple
}