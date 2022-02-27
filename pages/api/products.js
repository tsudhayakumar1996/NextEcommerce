import { Products } from "../../forAPI/products"

export default function handler(req, res) {  
  if(req.method === "GET") {
    res.status(200).json(Products)
  }  
  else if(req.method === "PUT") {
    const id = req.body        
    const particularID = Products.filter((eachId) => eachId.id === id)    
    res.status(201).json(particularID)
  }
}
