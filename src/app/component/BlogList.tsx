// components/BlogList.tsx
import Link from 'next/link';
import dbConnect from '../../../lib/mongodb';
import Post from '../../../models/Post';


// Component nhận vào prop limit (số lượng bài muốn hiện)
// Nếu không truyền limit thì mặc định lấy hết (0)
export default async function BlogList({ limit = 0 }: { limit?: number }) {

  // 1. Logic lấy dữ liệu
  await dbConnect();

  // Query DB: Sắp xếp mới nhất, và áp dụng limit nếu có
  let query = Post.find({}).sort({ createdAt: -1 });

  if (limit > 0) {
    query = query.limit(limit);
  }

  const postsRaw = await query.lean();
  const posts = JSON.parse(JSON.stringify(postsRaw));

  // 2. Logic hiển thị (UI cũ của bạn)
  if (posts.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-50 rounded-lg">
        <p className="text-gray-500">Chưa có tin tức nào.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
      {posts.map((post: any) => (
        <article
          key={post._id}
          className={`flex bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 relative 
        w-full max-w-[520px] mx-auto 
        h-32 md:h-36 max-h-[150px]
        ${post.isPinned ? 'border-blue-300 ring-1 ring-blue-50' : 'border-gray-200'}
      `}
        >
          {/* Ảnh Thumbnail */}
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

          {/* Nội dung */}
          <div className="p-4 md:p-2 flex flex-col flex-grow w-2/3 md:w-3/5">
            <div className="text-xs text-blue-600 mb-2 font-semibold">
              {new Date(post.createdAt).toLocaleDateString('vi-VN')}
            </div>

            <h2 className="text-base font-bold mb-2 text-gray-900 line-clamp-2 hover:text-blue-600">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>

            <p className="text-gray-600 mb-3 line-clamp-2 flex-grow text-xs" style={{marginTop:"unset",overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,lineHeight:"unset"}}>
              {post.description}
            </p>

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
  );
}