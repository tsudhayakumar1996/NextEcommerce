import { Test } from "../../forAPI/test"

export default function handler(req, res) {  
  if(req.method === "GET") {
    res.status(200).json(Test)
  }  
  else if(req.method === "POST") {
    const name = req.body.val        
    const newObj = {"name":name}    
    Test.push(newObj)    
    res.status(201).json(Test)
  }
}
