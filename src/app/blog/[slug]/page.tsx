// app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import dbConnect from '../../../../lib/mongodb';
import Post, { IPost } from '../../../../models/Post';

// Hàm lấy bài viết theo slug
async function getPost(slug: string) {
  await dbConnect();
  const post = await Post.findOne({ slug }).lean();
  return post as unknown as IPost | null;
}

// Hàm để tạo Metadata cho SEO (Title, Description hiện trên Google/Facebook)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return { title: 'Bài viết không tồn tại' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.thumbnail ? [{ url: post.thumbnail }] : [],
    },
  };
}

export default async function PostDetail({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound(); // Trả về trang 404 nếu không tìm thấy bài
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb quay về */}
      {/* <div className="mb-8">
        <Link href="/sano-life" className="text-blue-600 hover:underline">
          ← Quay lại danh sách
        </Link>
      </div> */}

      {/* Header bài viết */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <p className="text-gray-500 italic">
          Đăng ngày: {new Date(post.createdAt).toLocaleDateString('vi-VN')}
        </p>
      </header>

      {/* Ảnh thumbnail lớn (nếu có) */}
      {post.thumbnail && (
        <div className="mb-8 w-full h-auto rounded-lg overflow-hidden shadow-sm">
           <img 
            src={post.thumbnail} 
            alt={post.title} 
            className="w-full object-cover"
          />
        </div>
      )}

      {/* NỘI DUNG CHÍNH (HTML từ Editor) */}
      <div 
        className="prose prose-lg prose-blue max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}