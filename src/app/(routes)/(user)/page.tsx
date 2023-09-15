import { DailyStatus, HomeHero, ServicesGroup, IntroBlog, IntroBlogRight, VideoPlace, GalleryHome } from "@/app/_components";
import TourList from "@/app/_data/TourList";

export default function Home() {
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras. Purus diam est vitae faucibus enim. Ultricies nunc vel magnis gravida quis sodales. Lacus, elit pellentesque massa odio. Sed dictumst condimentum sit quis "
  
  return (
    <>
      <HomeHero/>
      <IntroBlog title="Ordinary Best Western 5 Stars Hotel Since 1998" content={content}/>
      <DailyStatus/>
      <ServicesGroup servicesList={TourList}/>
      <IntroBlogRight title="Ordinary Best Western 5 Stars Hotel Since 1998" content={content}/>
      <IntroBlog title="Ordinary Best Western 5 Stars Hotel Since 1998" content={content}/>
      <IntroBlogRight title="Ordinary Best Western 5 Stars Hotel Since 1998" content={content}/>
      <VideoPlace />
      <GalleryHome />
    </>
  )
}

