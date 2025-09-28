//rfc Snipppet  สร้าง Function Component ทั่วๆ ไป
//np Snippet สร้าง Page Component
import MenuBar from "@/components/MenuBar";
export default function Page() {
  return (
    <>
      <MenuBar />
      <h1 className="text-center">Welcome to DTI-SAU</h1>
      <h1 className="text-center text-lime-700 font-bold">วรชัย  โหมวานิช</h1>
      <hr />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, sint asperiores debitis enim, mollitia laborum iusto deserunt dolor delectus vitae aspernatur quisquam explicabo? Deserunt reiciendis non accusamus! Laborum, reprehenderit ipsam.
      </p>
    </>
  );
}