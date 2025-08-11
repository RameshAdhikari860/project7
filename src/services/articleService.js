import Article from "../model/Article.js"

const createArticle = async (data)=>{

    const result = await Article.create({
        title: data.title,
        subTitle :data.subTitle,
        description :data.description,
        artist : data.artist
    })

    return result
}

// Day four from here

const getAllArticle = async()=>{
  return await Article.find()
}


const getSingleArticle = async (id)=>{

    return await Article.findById(id)
    
}

const  deleteArticle = async (id)=>{

    return await Article.findByIdAndDelete(id)
}


const updateArticle =  async (id,article)=>{

   return await Article.findByIdAndUpdate(id,article,{new:true})
}


export default {createArticle,getAllArticle,getSingleArticle,deleteArticle,updateArticle}



// { title,subTitle,description,artist}
// data = { title:'adfasdfadf',subTitle:"adfasdf",description:"adasd",artist:"dasfasd"}

// SubmitEvent(4,5)

// SubmitEvent(addEventListener,bfasda)
//     return  a+b;