// app/blog/page.tsx

import dbConnect from "../../../lib/mongodb";
import Post from "../../../models/Post";
import BlogSection from "../component/BlogSection";
import HeroFeature from "../component/HeroFeature";


export const dynamic = 'force-dynamic';

async function getFeaturedPosts() {
  await dbConnect();
  // Lấy 3 bài ghim hoặc mới nhất để làm Hero
  const posts = await Post.find({}).sort({ isPinned: -1, createdAt: -1 }).limit(3).lean();
  return JSON.parse(JSON.stringify(posts));
}

export default async function BlogPage({ 
  searchParams 
}: { 
  searchParams: { page?: string, search?: string } 
}) {
  const currentPage = parseInt(searchParams.page || '1');
  const searchQuery = searchParams.search || '';
  
  // Lấy dữ liệu cho Hero
  const heroPosts = await getFeaturedPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HEADER CŨ (Giữ lại hoặc bỏ tùy bạn, nhưng nên giữ thanh tìm kiếm) */}
      <div className="bg-white border-b border-gray-200 pt-8 pb-4">
        {/* ... Code Header và Search Form của bạn ... */}
      </div>

      <div className="max-w-7xl mx-auto px-0 md:px-4 py-8">
        
        {/* --- PHẦN 1: HERO FEATURE (Giao diện tạp chí) --- */}
        {/* Chỉ hiện ở trang 1 và không có tìm kiếm */}
        {currentPage === 1 && !searchQuery && (
           <HeroFeature posts={heroPosts} />
        )}

        {/* --- PHẦN 2: DANH SÁCH BÀI VIẾT CÒN LẠI --- */}
        <div className="px-4 md:px-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">
             Bài viết mới nhất
          </h2>
          
          <BlogSection 
            limit={9} 
            showPagination={true} 
            page={currentPage} 
            baseUrl="/blog"
            search={searchQuery}
            hideTitle={true} 
            // Nếu muốn, bạn có thể skip 3 bài đầu trong BlogSection để không bị trùng
            // Nhưng cần sửa logic trong BlogSection một chút, hoặc đơn giản cứ để nó hiện lại cũng không sao
          />
        </div>

      </div>
    </div>
  );
}