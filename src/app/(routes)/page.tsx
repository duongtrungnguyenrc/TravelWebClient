import { Bottom, HomeHero, NavBar } from "../_components";

export default function Home() {
  console.log("render");
  
  return (
    <>
      <NavBar/>
      <HomeHero/>
      <Bottom/>
    </>
  )
}

