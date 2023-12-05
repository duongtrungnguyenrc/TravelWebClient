
import { BlogEditor } from '@/app/_components';
import { blogServices } from '@/app/_services';
import { AllBlogsResponse } from '@/app/_types';

const AdminBlogPage = async () => {

  const response = await blogServices.get(1, 20);
  const posts = (response.data as AllBlogsResponse);
  
  return (
    <BlogEditor data={posts}/>
  )
};
export default AdminBlogPage;