import {
  Bottom,
  HomeHero,
  NavBar,
  IntroBlog,
  IntroBlogRight,
  Weather,
  VideoPlace,
} from "../_components";

export default function Home() {
  console.log("render");

  return (
    <>
      <NavBar />
      <HomeHero />
      <IntroBlog
        title="Ordinary Best Western 5 Stars Hotel Since 1998"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, 
        egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti 
        sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. 
        Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras."
      />
      <Weather />
      <IntroBlogRight
        title="La Vie Restaurant"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, 
        egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti 
        sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. 
        Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras."
        myList = {["Vienna Bar" , "Rolio Club", "In Room Dinning"]}
      />
      <IntroBlog
        title="Jazucci Private Spa"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, 
        egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti 
        sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. 
        Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras."
      />
      <IntroBlogRight
        title="Ocenia Waterpool"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. 
        Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper 
        aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. 
        Platea eu orci enim est egestas fusce cras.Purus diam est vitae faucibus enim. Ultricies nunc vel 
        magnis gravida quis sodales. Lacus, elit pellentesque massa odio. Sed dictumst condimentum sit quis "
      />
      <VideoPlace />
      <Bottom />
    </>
  );
}
