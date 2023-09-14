import './styles.scss';
interface LayoutProps {
  title?: string;
  content?: string;
}
const IntroBlog = ({title , content}: LayoutProps) => {
  return (
    <section className="container-blog">
      <div className="blog-left-site">
        <img src="/images/home-slider-1.jpg" alt="" />
      </div>
      <div className="blog-right-site">
        <div className="heading-blog">
          <h1 className="heading-name">
            {title}
          </h1>
        </div>
        <div className="content-intro-blog">
          <p className="content-blog">
            {content}
          </p>
          <div className="btn-more">
            <button className=" btn btn-big btn-yellow">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IntroBlog;
