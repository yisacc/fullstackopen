const listHelper = require('../utils/list_helper')
const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]
const authorBlogs=[
  {
    author: "Michael Chan",
    blogs: 7,
  },
  {
    author: "Edsger W. Dijkstra",
    blogs: 5,
  },
  {
    author: "Edsger W. Dijkstra",
    blogs: 12,
  },
  {
    author: "Robert C. Martin",
    blogs: 10,
  },
  {
    author: "Robert C. Martin",
    blogs: 0,
  },
  {
    author: "Robert C. Martin",
    blogs: 2,
  }
]
const authorLikes=[
  {
    author: "Michael Chan",
    likes: 7,
  },
  {
    author: "Edsger W. Dijkstra",
    likes: 5,
  },
  {
    author: "Edsger W. Dijkstra",
    likes: 12,
  },
  {
    author: "Robert C. Martin",
    likes: 10,
  },
  {
    author: "Robert C. Martin",
    likes: 0,
  },
  {
    author: "Robert C. Martin",
    likes: 2,
  }
]
test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes',()=>{
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })
  test('of many is calculated right', () => {
    expect(listHelper.totalLikes(blogs)).toBe(36)
  })
  test('of empty array is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })
})

describe('favorite blog',()=>{
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, returns that', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)
    expect(result).toEqual(listWithOneBlog[0])
  })
  test('of many is return the right value', () => {
    expect(listHelper.favoriteBlog(blogs)).toEqual(blogs[2])
  })
  test('of empty array is empty object', () => {
    expect(listHelper.favoriteBlog([])).toEqual({})
  })
})
describe('most blogs',()=>{
  test('when list has only one blog, returns that blog', () => {
    const listWithOneBlog=[{
      author: "Robert C. Martin",
      blogs: 3
    }]
    const result = listHelper.mostBlogs(listWithOneBlog)
    expect(result).toBe(listWithOneBlog[0].author)
  })
  test('of many is return the right blog',()=>{
    const result = listHelper.mostBlogs(authorBlogs)
    expect(result).toBe(authorBlogs[2].author)
  })
})
describe('most likes',()=>{
  test('when list has only one blog, returns that blog', () => {
    const listWithOneBlog=[{
      author: "Edsger W. Dijkstra",
      likes: 17
    }]
    const result = listHelper.mostLikes(listWithOneBlog)
    expect(result).toEqual(listWithOneBlog[0])
  })
  test('of many is return the right blog',()=>{
    const result = listHelper.mostLikes(authorLikes)
    expect(result).toBe(authorLikes[2])
  })
})