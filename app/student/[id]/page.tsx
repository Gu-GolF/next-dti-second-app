export default async function Page({params}:{params: Promise<{id:string} >}) {
    const { id } = await params;
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