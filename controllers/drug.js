const {Admin,User,Drug} = require('../models')
const { randNum ,Mailer} = require('../helpers/helper')
exports.createDrug= async(req,res)=>{
     const{ name,description,price,quantity,adminID,images}= req.body
     try{
         const drug = await new Drug({...req.body}).save()
         res.send(drug)
     }catch(err){
         res.status(400).json({message:err.message})
     }
}
exports.getDrug= async(req,res)=>{
    const{searchTerm}= req.body
    try{
        const drug = await Drug.find({name: { $regex: searchTerm, $options: 'i' } })
        res.send(drug)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.getDrugbyVendor= async(req,res)=>{
     const{adminID}= req.body
     try{
         const drug=  await Drug.find({adminID})
         res.send(drug)
     }catch(err){
         res.status(400).json({message:err.message})
     }
}
exports.editDrug= async(req,res)=>{
    const{_id,name,description,price,quantity,images}= req.body
    try{
        const drug= await Drug.findByIdAndUpdate({_id},{name,description,price,quantity,images})
        res.send(drug)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}