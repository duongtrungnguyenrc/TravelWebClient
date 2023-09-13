import { Bottom, HomeHero, NavBar } from "@/app/_components";
import IntroBlog from "@/app/_components/IntroBlog/IntroBlog";
import IntroBlogRight from "@/app/_components/IntroBlogRight/IntroBlogRight";
import Weather from "@/app/_components/Weather/Weather";

export default function Home() {
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras. Purus diam est vitae faucibus enim. Ultricies nunc vel magnis gravida quis sodales. Lacus, elit pellentesque massa odio. Sed dictumst condimentum sit quis "
  
  return (
    <>
      <HomeHero/>
      <IntroBlog title="Ordinary Best Western 5 Stars Hotel Since 1998" content={content}/>
      <Weather/>
      <IntroBlogRight title="Ordinary Best Western 5 Stars Hotel Since 1998" content={content}/>
    </>
  )
}

