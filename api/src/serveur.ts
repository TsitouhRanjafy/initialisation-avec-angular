import express , { Application , Request , Response} from 'express'
import mongoose from "mongoose"
import Contact, { IContact } from './Models/contact.model'
import { ReasonPhrases, StatusCodes } from "http-status-codes"
import { v4 as uuidv4} from "uuid"
import cors from "cors"


const app : Application = express()
const PORT = 8080

app.use(express.json())
app.use(cors())


app.get("/gets",async (req : Request, res : Response) =>{
    try {
        const contacts : Array<IContact> = await Contact.find({},{_id : 0,__v : 0});
        res.status(StatusCodes.OK).json(contacts)
    } catch (error) {
        throw new Error("Not geted")
    }
})

app.get("/get/:id",async (req : Request, res : Response) =>{
    const { id }  = req.params
    try {
        const contact : Array<IContact> = await Contact.find({id : {$eq : id }},{ _id : 0 ,__v : 0})
        res.status(StatusCodes.OK).json(contact[0])
    } catch (error) {
        throw error
    }
})

app.post("/add",async (req : Request, res : Response) =>{
    const { name, numberPhone } = req.body
    const id = uuidv4();
    const imageUrl : string = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    try {
        const contact = new Contact({
            id,
            name,
            numberPhone,
            imageUrl
        })
        
        await contact.save();
        res.status(StatusCodes.CREATED).json({
            status : ReasonPhrases.CREATED
        })
    } catch (error) {
        throw new Error("Not added")
    }
})

app.put("/update/:id", async (req : Request, res : Response) =>{
    const newContact : IContact = req.body
    const { id } = req.params
    try {
        await Contact.updateOne({id : id},{$set : {name : newContact.name,numberPhone : newContact.numberPhone }})
        res.status(StatusCodes.ACCEPTED).json({
            status : ReasonPhrases.ACCEPTED
        })
    } catch (error) {
        
    }
})

app.delete("/delete/:id",async (req : Request, res : Response) =>{
    const { id } = req.params
    try {
        await Contact.deleteOne({id : id})
        res.status(StatusCodes.OK).json({
            status : ReasonPhrases.OK
        })
    } catch (error) {
        throw new Error("Not Deleted")
    }
})











const demarrageDB = async () =>{
    try {
        // essayer de se connecter avec le serveur de la base  de donnée
        await mongoose.connect('mongodb://localhost:27017/toDoList');
        console.log('connexion à la base de donnée réussi');
        
    } catch (error) {
        console.log('connexion à la base de donnée echoue : ',error)
    }
}
demarrageDB()




app.listen(PORT,() =>{
    console.log(`le serveur est demarrer sur le port \"http://locahost:${PORT}\"`);
})
