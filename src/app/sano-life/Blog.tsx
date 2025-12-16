// app/blog/page.tsx
import Link from 'next/link';
import dbConnect from '../../../lib/mongodb';
import Post from '../../../models/Post';


async function getPosts() {
  try {
    await dbConnect();
    const posts = await Post.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    console.error("Lỗi lấy bài viết:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Tin Tức</h1>
        <p className="text-gray-600">Cập nhật những hoạt động và thông tin mới nhất</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">Chưa có bài viết nào được đăng.</p>
        </div>
      ) : (
        // --- DESIGN MỚI: Grid 2 cột, 2 hàng ---
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((post: any) => (
            <article 
              key={post._id} 
              // Dùng flex để chia ảnh và nội dung sang 2 bên
              className="flex bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Phần 1: Ảnh Thumbnail (Bên trái) */}
              <Link href={`/blog/${post.slug}`} className="block relative w-1/3 md:w-2/5 flex-shrink-0 group overflow-hidden">
                 {post.thumbnail ? (
                    <img 
                      src={post.thumbnail} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                      No Image
                    </div>
                 )}
              </Link>

              {/* Phần 2: Thông tin (Bên phải) */}
              <div className="p-3 md:p-5 flex flex-col flex-grow w-2/3 md:w-3/5">
                {/* Ngày đăng */}
                <div className="text-xs text-blue-600 mb-2 font-semibold">
                  {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                </div>
                
                {/* Tiêu đề */}
                <h2 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 hover:text-blue-600">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                {/* Mô tả ngắn */}
                <p className="text-gray-600 mb-3 line-clamp-2 flex-grow text-sm">
                  {post.description}
                </p>

                {/* Link đọc tiếp */}
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 font-medium text-sm hover:underline mt-auto"
                >
                  Đọc chi tiết
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}