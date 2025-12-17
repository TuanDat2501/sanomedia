// components/BlogSection.tsx
import Link from 'next/link';
import dbConnect from '../../../lib/mongodb';
import Post from '../../../models/Post';


interface BlogSectionProps {
  limit?: number;        // Số bài trên 1 trang (hoặc số bài tối đa nếu không phân trang)
  className?: string;    // Class tùy chỉnh
  page?: number;         // Trang hiện tại
  showPagination?: boolean; // Bật/tắt phân trang
  baseUrl?: string;      // Đường dẫn gốc (ví dụ: "/blog")
}

export default async function BlogSection({ 
  limit = 4, 
  className = "", 
  page = 1, 
  showPagination = false,
  baseUrl = "/sano-life"
}: BlogSectionProps) {
  
  await dbConnect();

  // 1. Tính toán Skip (bỏ qua bao nhiêu bài)
  const skip = (page - 1) * limit;

  // 2. Query dữ liệu
  const query = Post.find({}).sort({ isPinned: -1, createdAt: -1 });

  // Nếu có phân trang thì dùng skip, nếu không thì thôi
  if (showPagination) {
    query.skip(skip);
  }
  
  // Luôn luôn limit số lượng
  query.limit(limit);

  const postsRaw = await query.lean();
  const posts = JSON.parse(JSON.stringify(postsRaw));

  // 3. Tính tổng số trang (Chỉ khi bật phân trang)
  let totalPages = 0;
  if (showPagination) {
    const totalPosts = await Post.countDocuments({});
    totalPages = Math.ceil(totalPosts / limit);
  }

  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Blog & Tin Tức
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Cập nhật những hoạt động và thông tin mới nhất
            </p>
          </div>
          
          {/* Nút Xem tất cả (Chỉ hiện khi KHÔNG phân trang - tức là ở trang chủ) */}
          {!showPagination && (
            <Link 
              href="/blog" 
              className="hidden md:inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
            >
              Xem tất cả →
            </Link>
          )}
        </div>

        {/* DANH SÁCH BÀI VIẾT (GRID) */}
        {posts.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg text-gray-500">
            Chưa có bài viết nào.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {posts?.map((post: any) => (
              <article 
                key={post._id} 
                className={`flex bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 relative 
                  w-full max-w-[520px] mx-auto 
                  h-32 md:h-36 max-h-[150px]
                  ${post.isPinned ? 'border-blue-300 ring-1 ring-blue-50' : 'border-gray-200'}
                `}
              >
                {post.isPinned && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl z-10">
                    Ghim
                  </div>
                )}

                <Link href={`/blog/${post.slug}`} className="block relative w-32 md:w-40 flex-shrink-0 group overflow-hidden">
                   {post.thumbnail ? (
                      <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                   ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 text-xs">No Img</div>
                   )}
                </Link>

                <div className="p-3 flex flex-col flex-grow min-w-0">
                  <div className="text-[10px] text-blue-600 mb-1 font-semibold uppercase tracking-wider">
                    {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                  </div>
                  <h2 className="text-sm md:text-base font-bold mb-1 text-gray-800 line-clamp-2 leading-tight hover:text-blue-600">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 mb-2 line-clamp-2 text-xs" style={{marginTop:"unset",overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,lineHeight:"unset"}}>
                    {post.description}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium text-xs hover:underline mt-auto flex items-center">
                    Xem chi tiết
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* NÚT PHÂN TRANG (Chỉ hiện khi showPagination = true) */}
        {showPagination && totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-10">
            {/* Nút Trước */}
            {page > 1 ? (
              <Link href={`${baseUrl}?page=${page - 1}`} className="px-3 py-1 border rounded hover:bg-gray-100 text-gray-700 text-sm">
                &laquo; Trước
              </Link>
            ) : (
              <span className="px-3 py-1 border rounded text-gray-300 cursor-not-allowed text-sm">&laquo; Trước</span>
            )}

            {/* Số trang */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`${baseUrl}?page=${p}`}
                className={`px-3 py-1 border rounded text-sm ${
                  p === page ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {p}
              </Link>
            ))}

            {/* Nút Sau */}
            {page < totalPages ? (
              <Link href={`${baseUrl}?page=${page + 1}`} className="px-3 py-1 border rounded hover:bg-gray-100 text-gray-700 text-sm">
                Sau &raquo;
              </Link>
            ) : (
              <span className="px-3 py-1 border rounded text-gray-300 cursor-not-allowed text-sm">Sau &raquo;</span>
            )}
          </div>
        )}

        {/* Nút Xem tất cả cho Mobile (Nếu ở trang chủ) */}
        {!showPagination && (
           <div className="mt-6 text-center md:hidden">
             <Link href="/blog" className="inline-block px-6 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-full hover:bg-blue-600 hover:text-white transition-colors">
              Xem tất cả
            </Link>
           </div>
        )}

      </div>
    </section>
  );
}