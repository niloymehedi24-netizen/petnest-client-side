import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import PetCareTips from "@/components/PetCareTips";
import SuccessStories from "@/components/SuccessStories";
import WhyAdopt from "@/components/WhyAdopt";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <WhyAdopt></WhyAdopt>
      <SuccessStories></SuccessStories>
      <PetCareTips></PetCareTips>
    </div>
  );
}
