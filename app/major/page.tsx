import Menumajor from "@/components/Menumajor";
import MenuBar from "@/components/MenuBar";
import { Kanit, Bungee } from "next/font/google";

const item = Kanit({
  subsets: ["thai"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Page() {
  return (
    <>
    <MenuBar />
       <h1 className={`${item.className} text-center`}>สาขาวิชาต่างๆ</h1>
      <hr />
      <Menumajor/>
      <p className={`${bungee.className}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, sint asperiores debitis enim, mollitia laborum iusto deserunt dolor delectus vitae aspernatur quisquam explicabo? Deserunt reiciendis non accusamus! Laborum, reprehenderit ipsam.
      </p>
    </>
  );
}