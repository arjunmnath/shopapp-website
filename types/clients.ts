

type Client = {
    clientName: string;
    email: string;
    phone: number;
    clientId: string;
    joinedOn: string;
    outstanding:number
}

type Clients = Client[];
export type {
    Client,
    Clients
}