import articleService from "../services/articleService.js";

const createArticle = async (req, res) => {
  try {
    const { title, subTitle, description, artist } = req.body;


    //  const  data = req.body
    if (!title) {
      throw new Error("Title is Needed");
    }
    if (!subTitle || !description || !artist) {
      throw new Error("Missing credentials");
    }

    const result = await articleService.createArticle({
      title,
      subTitle,
      description,
      artist,
    });

    res.status(200).json({
      message: "Aritcle created successfully",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

//Day 4 from here

const getAllArticle = async (req, res) => {
  const data = await articleService.getAllArticle();

  res.status(200).json({
    message: "Article fetched successfully",
    data,
  });
};

const getSingleArticle = async (req, res) => {
  try {

    const id = req.params.id;

    if(!id){throw new Error("Id is missing")}

    const data = await articleService.getSingleArticle(id);
    
    if(!data){throw new Error("Article doesn't exist")}


    res.status(200).json({
      message : "success",
      data
    })
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};


const deleteArticle = async(req,res)=>{

try {
    const id = req.params.id
  console.log(id);
  const data = await articleService.deleteArticle(id)
   if(!data){throw new Error("Article doesn't exist")}
  res.status(200).json({
    message : 'succcess'
  })
} catch (error) {
  res.status(400).json({
    error : error.message
  })
}
}



const updateArticle = async (req,res)=>{

 try {
   const id = req.params.id

  if(!id){throw new Error("ID missing")}

  const article = req.body

  if(!req.body){throw new Error("Data Missing")}

  const data = await articleService.updateArticle(id,article)
  res.status(200).json({
    message : "Article updated successfully",
    data
  })
 } catch (error) {
  res.status(400).json({
    message: "failed to update product",
    error : error.message
  })
 }

}





export {updateArticle, createArticle, getAllArticle, getSingleArticle ,deleteArticle};
