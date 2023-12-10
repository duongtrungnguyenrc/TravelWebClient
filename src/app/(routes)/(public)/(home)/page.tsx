import {
    HomeHero,
    IntroBlog,
    DailyStatus,
    ServicesGroup,
    IntroBlogRight,
    PopularDestination,
    GalleryHome,
} from '@/app/_components';

export default function Home() {
    const content =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras. Purus diam est vitae faucibus enim. Ultricies nunc vel magnis gravida quis sodales. Lacus, elit pellentesque massa odio. Sed dictumst condimentum sit quis ';

    return (
        <main style={{ backgroundColor: '#fff' }}>
            <HomeHero />
            <IntroBlog
                title="Việt Nam - Khám phá vẻ đẹp độc đáo của điểm đến đa dạng"
                content="Việt Nam, đất nước nằm ở trung tâm Đông Nam Á, là một điểm đến du lịch phong phú với văn hóa đa dạng, cảnh đẹp tự nhiên tuyệt vời, và ẩm thực độc đáo. Du lịch Việt Nam mang lại trải nghiệm đa dạng từ những thành phố đô thị hiện đại đến những cảnh đẹp tự nhiên hùng vĩ, giúp du khách hiểu rõ hơn về lịch sử, văn hóa và lối sống của người Việt Nam."
            />
            <DailyStatus />
            <ServicesGroup />
            <IntroBlogRight
                title="Trải nghiệm du lịch hoàn hảo cùng dịch vụ đặt tour chuyên nghiệp"
                content="
                Dịch vụ tour du lịch của chúng tôi không chỉ là việc đưa bạn đến những điểm đến nổi tiếng, mà còn là hành trình tận hưởng và hiểu sâu hơn về văn hóa, lịch sử và đời sống địa phương. Chúng tôi tự hào với đội ngũ hướng dẫn du lịch chuyên nghiệp, am hiểu sâu rộng về đất nước và luôn sẵn sàng chia sẻ những câu chuyện và thông tin hữu ích. Chúng tôi cam kết tạo ra những trải nghiệm du lịch độc đáo, từ những hành trình nghệ thuật đương đại đến những chuyến phiêu lưu mạo hiểm giữa thiên nhiên hùng vĩ. 
                "
            />
            <IntroBlog
                title="Khám phá những địa điểm nổi tiếng, đậm đà bản sắc tại nơi đây"
                content="Một bức tranh đa sắc màu của những thửa ruộng bậc thang xanh ngắt ở Sa Pa, những dải cát trắng mịn dọc theo bờ biển Nha Trang, và vịnh Hạ Long huyền bí với hàng nghìn hòn đảo đá nổi tiếng trên thế giới.
                Không chỉ là việc khám phá những danh thắng lịch sử như đền Huế hùng vĩ hay phố cổ Hội An lãng mạn, mà còn là cơ hội để trải nghiệm cuộc sống hối hả và sôi động tại các thành phố lớn như Hà Nội và Thành phố Hồ Chí Minh. 
                "
            />
            <IntroBlogRight
                title="Trải nghiệm lưu trú sang trọng tại hệ thống khách sạn cao cấp"
                content="Chào mừng quý khách đến với Hệ thống Khách sạn Cao Cấp - nơi hòa mình vào không gian sang trọng và tiện nghi tinh tế, nơi mọi chi tiết đều được chăm sóc kỹ lưỡng để tạo ra trải nghiệm lưu trú không gian cách riêng biệt. Với sứ mệnh đồng lòng đem đến cho quý khách không gian sống đẳng cấp nhất, chúng tôi tự tin làm đối tác lưu trú lý tưởng cho mọi chuyến đi."
            />
            <PopularDestination />
            <GalleryHome />
        </main>
    );
}
