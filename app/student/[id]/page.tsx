export default function Page({params}:{params:{id:string} }) {
    const { id } = params;
  return (
    <>
    <h1>Student ID : {id} </h1>
    <hr />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur doloribus illo blanditiis animi similique consequatur soluta quae repudiandae dolores.
    </p>
      
    </>
  );
}