

const createArticle = async (data)=>{

    const result = await Aritcle.create({
        title: data.title,
        subTitle :data.subTitle,
        description :data.description,
        artist : data.artist
    })

    return result
}

export default {createArticle}

// { title,subTitle,description,artist}
// data = { title:'adfasdfadf',subTitle:"adfasdf",description:"adasd",artist:"dasfasd"}

// SubmitEvent(4,5)

// SubmitEvent(addEventListener,bfasda)
//     return  a+b;