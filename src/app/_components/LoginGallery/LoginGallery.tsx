import './styles.scss'

const LoginGallery = () => {
  return (
    <div className='login-gallery-site'>
        <div className="gallery-list-container">
            <div className="gallery-list">
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-4.png)'}}></div>
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-1.png)'}}></div>
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-2.png)'}}></div>
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-3.png)'}}></div>
            </div>
            <div className="gallery-list">
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-4.png)'}}></div>
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-5.png)'}}></div>
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-6.png)'}}></div>
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-2.png)'}}></div>
            </div>
            <div className="gallery-list">
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-7.png)'}}></div>
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-8.png)'}}></div>
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-9.png)'}}></div>
                <div className="gallery-item" style={{backgroundImage: 'url(/images/login-gallery-3.png)'}}></div>
            </div>
        </div>
    </div>
  );
};
export default LoginGallery;