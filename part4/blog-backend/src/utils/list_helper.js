const _ = require('lodash')
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
  const mostBlogs=(blogs)=>{
    return (_.maxBy(blogs,(o)=>o.blogs)).author
  }
  const mostLikes=(blogs)=>{
    const mostLikedBlogs=_.maxBy(blogs,(o)=>o.likes)
    return mostLikedBlogs
  }
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
  }