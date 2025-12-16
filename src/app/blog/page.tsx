// app/blog/page.tsx
import Link from 'next/link';
import dbConnect from '../../../lib/mongodb';
import Post from '../../../models/Post';


export const dynamic = 'force-dynamic';

// Số bài viết trên mỗi trang
const PAGE_SIZE = 4;

// Hàm lấy dữ liệu có Phân trang & Sắp xếp
async function getPosts(page: number) {
  await dbConnect();

  // Tính số bài cần bỏ qua (skip)
  const skip = (page - 1) * PAGE_SIZE;

  // 1. Đếm tổng số bài để tính số trang
  const totalPosts = await Post.countDocuments({});

  // 2. Query dữ liệu
  // sort({ isPinned: -1, createdAt: -1 }): Ghim (true) lên trước, sau đó đến bài mới nhất
  const posts = await Post.find({})
    .sort({ isPinned: -1, createdAt: -1 })
    .skip(skip)
    .limit(PAGE_SIZE)
    .lean();

  return {
    posts: JSON.parse(JSON.stringify(posts)),
    totalPages: Math.ceil(totalPosts / PAGE_SIZE),
    currentPage: page
  };
}

export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  // Lấy số trang từ URL (ví dụ ?page=2), mặc định là 1
  const page = parseInt(searchParams.page || '1');

  const { posts, totalPages, currentPage } = await getPosts(page);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Tin Tức</h1>
        <p className="text-gray-600">Cập nhật những hoạt động và thông tin mới nhất</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg">
          <p className="text-gray-500">Chưa có bài viết nào.</p>
        </div>
      ) : (
        <>
          {/* DANH SÁCH BÀI VIẾT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {posts.map((post: any) => (
              <article
                key={post._id}
                className={`flex bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 relative 
        w-full max-w-[520px] mx-auto 
        h-32 md:h-36 max-h-[150px]
        ${post.isPinned ? 'border-blue-300 ring-1 ring-blue-50' : 'border-gray-200'}
      `}
              >
                {/* Icon Ghim (chỉ hiện nếu bài được ghim) */}
                {post.isPinned && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-10">
                    Đã ghim
                  </div>
                )}

                {/* Ảnh Thumbnail */}
                <Link href={`/blog/${post.slug}`} className="block relative w-1/3 md:w-2/5 flex-shrink-0 group overflow-hidden">
                  {post.thumbnail ? (
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">No Image</div>
                  )}
                </Link>

                {/* Nội dung */}
                <div className="p-4 md:p-5 flex flex-col flex-grow w-2/3 md:w-3/5">
                  <div className="text-xs text-blue-600 mb-2 font-semibold">
                    {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                  </div>

                  <h2 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 hover:text-blue-600">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-3 line-clamp-2 flex-grow text-sm" style={{ marginTop: "10px !important" }}>
                    {post.description}
                  </p>

                  <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium text-sm hover:underline mt-auto">
                    Đọc chi tiết
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* PHÂN TRANG (PAGINATION) */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              {/* Nút Previous */}
              {currentPage > 1 ? (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="px-4 py-2 border rounded hover:bg-gray-100 text-gray-700"
                >
                  &laquo; Trước
                </Link>
              ) : (
                <span className="px-4 py-2 border rounded text-gray-300 cursor-not-allowed">&laquo; Trước</span>
              )}

              {/* Các số trang */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/blog?page=${p}`}
                  className={`px-4 py-2 border rounded ${p === currentPage
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'hover:bg-gray-100 text-gray-700'
                    }`}
                >
                  {p}
                </Link>
              ))}

              {/* Nút Next */}
              {currentPage < totalPages ? (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="px-4 py-2 border rounded hover:bg-gray-100 text-gray-700"
                >
                  Sau &raquo;
                </Link>
              ) : (
                <span className="px-4 py-2 border rounded text-gray-300 cursor-not-allowed">Sau &raquo;</span>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}