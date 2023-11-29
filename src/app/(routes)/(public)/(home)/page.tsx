import { DailyStatus, HomeHero, ServicesGroup, IntroBlog, IntroBlogRight, GalleryHome, PopularDestination } from "@/app/_components";

export default function Home() {
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras. Purus diam est vitae faucibus enim. Ultricies nunc vel magnis gravida quis sodales. Lacus, elit pellentesque massa odio. Sed dictumst condimentum sit quis "
  
  return (
    <main style={{backgroundColor: "#fff"}}>
      <HomeHero/>
      <IntroBlog title="Việt Nam - Khám phá vẻ đẹp độc đáo của điểm đến đa dạng" content={content}/>
      <DailyStatus/>
      <ServicesGroup/>
      <IntroBlogRight title="Trải nghiệm du lịch hoàn hảo cùng dịch vụ đặt tour chuyên nghiệp" content={content}/>
      <IntroBlog title="Ordinary Best Western 5 Stars Hotel Since 1998" content={content}/>
      <IntroBlogRight title="Ordinary Best Western 5 Stars Hotel Since 1998" content={content}/>
      <PopularDestination/>
      <GalleryHome />
    </main>
  )
}

