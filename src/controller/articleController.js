import articleService from "../services/articleService.js"

const createArticle = async(req,res)=>{

   try {
     const { title,subTitle,description,artist} = req.body

    //  const  data = req.body


    const result = await articleService.createArticle({ title,subTitle,description,artist})
   
    res.status(200).json({
        message : "Aritcle created successfully",
        result 
    })
   } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
   }
}

export {createArticle}