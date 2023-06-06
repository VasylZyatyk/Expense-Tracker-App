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
