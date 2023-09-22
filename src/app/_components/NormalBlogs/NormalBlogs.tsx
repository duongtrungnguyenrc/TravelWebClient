
import "./styles.scss";
import Link from "next/link";

const NormalBlogs = () => {
  return (
    <section className="normal-blogs-site">
        <div className="normal-blogs-header">
            <h1 className="blog-heading">Lasted post</h1>
        </div>
        <div className="normal-blogs-body">
            <Link href="" className="blog">
                <div className="blog-hero">
                    <img src="https://cdn.tuoitre.vn/zoom/480_300/2021/6/1/covid-tphcm-xet-nghiem-2-16225587987302091087680-crop-16227129239711954200938.jpg" alt="" />
                </div>
                <div className="blog-content">
                    <label className="blog-type">Sức khỏe</label>
                    <h2 className="blog-title">Coronavirus: Warning over easing lockdown measures too quickly</h2>
                    <div className="upload-info">
                        <p className="upload-time">2 Hour ago</p>
                        <p className="upload-author">Author bla bbla</p>
                    </div>
                </div>
            </Link>
            <Link href="" className="blog">
                <div className="blog-hero">
                    <img src="https://ik.imagekit.io/tvlk/blog/2022/10/kinh-nghiem-du-lich-vinh-ha-long-1.jpg?tr=dpr-2,w-675" alt="" />
                </div>
                <div className="blog-content">
                    <label className="blog-type">heath</label>
                    <h2 className="blog-title">Coronavirus: Warning over easing lockdown measures too quickly</h2>
                    <div className="upload-info">
                        <p className="upload-time">2 Hour ago</p>
                        <p className="upload-author">Author bla bbla</p>
                    </div>
                </div>
            </Link>
            <Link href="" className="blog">
                <div className="blog-hero">
                    <img src="https://nld.mediacdn.vn/291774122806476800/2021/9/7/3-chot-3-1630978256337659996993.jpg" alt="" />
                </div>
                <div className="blog-content">
                    <label className="blog-type">Chia sẻ kinh nghiệm</label>
                    <h2 className="blog-title">Du lịch Phú Quốc tháng 10 có điều gì đang chờ bạn khám phá?</h2>
                    <div className="upload-info">
                        <p className="upload-time">2 Hour ago</p>
                        <p className="upload-author">Author bla bbla</p>
                    </div>
                </div>
            </Link>
            <Link href="" className="blog">
                <div className="blog-hero">
                    <img src="https://www.chudus.vn/uploads/tra01/news/2023/05/22/e12d2f45893d372ad8066bc075ee2960.jpeg" alt="" />
                </div>
                <div className="blog-content">
                    <label className="blog-type">Chia sẻ kinh nghiệm</label>
                    <h2 className="blog-title">Kinh nghiệm du lịch đảo Phú Quý tự túc siêu tiết kiệm</h2>
                    <div className="upload-info">
                        <p className="upload-time">2 Hour ago</p>
                        <p className="upload-author">Author bla bbla</p>
                    </div>
                </div>
            </Link>
        </div>
    </section>
  );
};
export default NormalBlogs;