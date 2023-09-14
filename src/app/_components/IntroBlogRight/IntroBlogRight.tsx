import './styles.scss';
interface LayoutProps {
  title?: string;
  content?: string;
  myList?: string[]; 
}
const IntroBlogRight = ({title , content , myList}: LayoutProps) => {
  return (
    <section className="container-blog-right">
      <div className="blog-right-site">
        <img src="/images/home-slider-3.jpg" alt="" />
      </div>
      <div className="blog-left-site">
        <div className="heading-blog">
          <h1 className="heading-name">
            {title}
          </h1>
        </div>
        <div className="content-intro-blog">
          <p className="content-blog">
            {content}
          </p>
          <div className="list-container">
            <ul className ="list-content">
            {myList ? (
                <>
                  <li>{myList[0]}</li>
                  <li>{myList[1]}</li>
                  <li>{myList[2]}</li>
                </>
              ) : null}
            </ul>
          </div>
          <div className="btn-more">
            <button className=" btn btn-big btn-yellow">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IntroBlogRight;
