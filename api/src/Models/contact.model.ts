import { Document, Schema , model } from "mongoose";

export interface IContact extends Document{
    id : string,
    name : string,
    numberPhone : string
}

const contactSchema = new Schema<IContact>({
    id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    numberPhone : {
        type : String,
        required : true
    }
})

const Contact = model<IContact>('Contacts',contactSchema)

export default Contact

