const Course = (props) => {
const {courses}=props;
  return <>
  {courses.map((course)=>
  <div key={course.id}>
  <h1>{course.name}</h1>
  {course.parts.map((x)=><p key={x.id}>{x.name} {x.exercises}</p>)}
  <h3>total of {course.parts.reduce((sum,part) => part.exercises+sum,0)} exercises</h3>
  </div>
)}
  </>
}

export default Course