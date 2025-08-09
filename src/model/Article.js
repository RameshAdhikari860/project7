

import mongoose from "mongoose";




const Article = mongoose.model('Article',new mongoose.Schema(
    {

    title : {
        type : String,
       maxLength : 25,
        required : true
        
    },
    subTitle : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true,
         minLength  : 25,
    },
    artist : {
        type : String,
       
    }
},
{
    timestamps : true
}
))

export default Article;


