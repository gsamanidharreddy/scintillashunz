import { doc, getDoc } from "firebase/firestore"; 
import { getDb } from "./db.mjs"

const collection_name = "TimeLine"

export const findOne = async id => {
    const d = await getDoc(doc(getDb(), collection_name, (id)));
    if(d.data().Images == undefined){
        return 0;
    }
    return d.data()
}