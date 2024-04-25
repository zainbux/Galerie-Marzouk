import Footer from "./components/Footer/Footer";
import CategorySection from "./components/CategorySection/CategorySection";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import ProductionSection from "./components/Categories/ProductSection";
import AboutSection from "./components/AboutSection";
import ReviewSection from "./components/Reviews/ReviewSection";
import { getReviews } from "@/lib/api";




export default async function Home() {


    const reviews = await getReviews();
    if (!reviews) {
      return <div>No reviews found</div>
    }

  return (
    <main className="bg-orange-50">

      <section ><Hero/></section>

      <section id="categories_section"><ProductionSection /></section>

      <section><AboutSection /></section>

      <section className="mt-20"><SocialProof/></section>


      <section ><CategorySection pageTo={"category/rugs"} category={"rugs"} btn={"Rugs"} image={"/Designer (7).png"}/></section>

      <section ><CategorySection pageTo={"category/poufs"} category={"poufs"} btn={"Poufs"} image={"/Designer (10).png"}/></section>

      <section ><CategorySection pageTo={"category/pillowsblankets"} category={"pillows_blankets"} btn={"Blankets & Pillows"} image={"/Designer (6).png"}/></section>

      <section ><CategorySection pageTo={"category/lampsfixtures"} category={"lamps_fixtures"}  btn={"Lamps & Fixtures"} image={"/Designer (12).png"}/></section>

      <ReviewSection reviews={reviews}/>

      



    </main>
  );
}
