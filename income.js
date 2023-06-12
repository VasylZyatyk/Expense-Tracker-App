const incomeScema = require("../models/incomeModule")


exports.addIncome = async(req,res) => {
    const {title,amount,category,description,date} = req.body
    const income = incomeScema({
        title,
        amount,
        category,
        description,
        date
    })
    try {
        if(!title||!amount||!category||!description)
            res.status(400).json({message:'All fields must be provided')}
        if(amount<0||!amount==='number')
            res.status(400).json({message:'Amount must be positive')}
            await income.save()
            res.status(200).json({message:'Income added successfully'})
    catch(error) 
        {
            res.status(500).json({message:error.message})
        }
  
 exports.getIncome = async (req, res) =>{
    try {
        const income= await incomeScema.find().sort({createdAt:-1})
        res.status(200).json(income)
    } catch(error){
        res.status(500).json({message:error.message})
    }
}
  
 exports.DeleteIncome = async (req, res) =>{
  const{id}=req.params
  console.log(params.id)
  incomeScema.findById(id).delete
    try{((income) =>
        res.status(200).json({message:'income deleted'}))
} catch(error) =>
    res.status(500).json({message:error.message})
}
