const Content=({...props})=>{
    return (<>
    {props.parts.map((course,index)=><p key={index}>{course.name} {course.exercise}</p>)}</>)
}
export default Content;