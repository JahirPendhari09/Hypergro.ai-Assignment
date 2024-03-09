export interface Reply {
    name: string;
    id: number;
    comment: string;
    reply: Reply[];
    date:string,
}

export const initialReply: Reply = {
    name: "",
    id: Math.random(),
    comment: "",
    reply: [],
    date:'',
};

export interface initialForm {
    name:string,
    comment:string
}
