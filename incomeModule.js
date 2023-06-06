const mongoose = require('mongoose')


const IncomeScheme = new mongoose.Scheme({
    title: 
    {
        type : 'String',
        required : true,
        trim : true,
        maxLength : 50
    },
    amount: 
    {
        type : 'Number',
        required : true,
        maxLength : 20,
        trim : true,
    },
    type:
    {
        type : 'String',
        default:'Income',
    },
    date : 
    {
        type : 'Date',
        trim : true,
        required : true,
    },
    category :
    {
        type : 'String',
        required : true,
        trim : true,
    },
    descroption :
    {
        type : 'String',
        required : true,
        maxLength: 20,
        trim : true,
    },
},{timestamps: true})   
module.exports = mongoose.module('IncomeScheme')
