import { ObjectId } from "mongodb";
import { connect } from "../DBConfig/riddles.js";

const collectionName = "Reports"

export async function create(riddle) {
  const db = await connect();
  const id = await db.collection(collectionName).insertOne(riddle)
  return id
}

export async function readAll() {
  const db = await connect();
  const data = await db.collection(collectionName).find().toArray()
  return data
}

export async function readById(id) {
  const db = await connect();
  const data = await db.collection(collectionName).findOne({ "_id": new ObjectId(id) })
  return data
}

export async function update(id,riddle) {
  const db = await connect();
  const data = await db.collection(collectionName).updateOne({ "_id": new ObjectId(id) } , { $set: riddle })
  return data
}

export async function deleted(id){
    const db = await connect();
    const data = await db.collection(collectionName).deleteOne({ "_id": new ObjectId(id) })
    return(data);
}