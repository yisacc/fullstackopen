const dummy = (blogs) => {
    return 1;
  }
  const totalLikes=(blogs)=>{
    return blogs.reduce((like,curValue)=>{
        return like+curValue.likes}
        ,0)
  }
  const favoriteBlog=(blogs)=>{
    return blogs.length? blogs.reduce((prev,current)=>{
      return (prev.likes>current.likes)?prev:current
    }): {}
  }
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }