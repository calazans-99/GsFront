import bannerCapa from "@/img/banner-home.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src={bannerCapa} alt="produtos"/>
    </div>
  )
}
