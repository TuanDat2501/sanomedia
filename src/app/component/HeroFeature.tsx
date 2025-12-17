// components/HeroFeature.tsx
import Link from 'next/link';

interface HeroFeatureProps {
  posts: any[];
}

export default function HeroFeature({ posts }: HeroFeatureProps) {
  // Nếu không đủ 3 bài thì ẩn luôn cho đỡ lỗi
  if (!posts || posts.length < 3) return null;

  const [mainPost, subPost1, subPost2] = posts;

  // Hàm render card chung
  // heightClass: Tham số để truyền chiều cao cứng (ví dụ: h-[400px])
  const renderCard = (post: any, heightClass: string, isMain: boolean) => (
    <Link 
      href={`/blog/${post.slug}`} 
      className={`relative block group overflow-hidden w-full ${heightClass}`}
    >
      {/* 1. Ảnh Thumbnail */}
      {post.thumbnail ? (
        <img 
          src={post.thumbnail} 
          alt={post.title} 
          // object-cover: Cắt ảnh vừa khung, không bị méo
          // w-full h-full: Bắt buộc ảnh phải lấp đầy chiều cao đã fix cứng ở trên
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">No Image</div>
      )}

      {/* 2. Lớp phủ đen (Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

      {/* 3. Nội dung chữ */}
      <div className="absolute bottom-0 left-0 p-4 w-full z-10">
        <span className="inline-block text-[10px] font-bold text-pink-500 tracking-wider uppercase mb-1">
           LIFESTYLE
        </span>

        <h3 className={`font-bold text-white leading-tight mb-1 group-hover:text-blue-400 transition-colors line-clamp-2 ${isMain ? 'text-xl md:text-2xl' : 'text-sm md:text-base'}`}>
          {post.title}
        </h3>

        <div className="flex items-center text-gray-400 text-[10px] md:text-xs font-medium mt-1">
          <span className="uppercase mr-2">Sano Team</span>
          <span>• {new Date(post.createdAt).toLocaleDateString('vi-VN')}</span>
        </div>
      </div>
    </Link>
  );

  return (
    // Grid chia cột: Desktop 3 cột (2 cột cho ảnh to, 1 cột cho 2 ảnh nhỏ)
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
      
      {/* --- CỘT TRÁI (MAIN) --- */}
      {/* Desktop: Chiếm 2 phần */}
      <div className="lg:col-span-2">
         {/* FIX CỨNG: Mobile cao 250px, Desktop cao 400px */}
         {renderCard(mainPost, 'h-[250px] lg:h-[400px]', true)}
      </div>

      {/* --- CỘT PHẢI (SUB) --- */}
      {/* Desktop: Chiếm 1 phần */}
      <div className="flex flex-col gap-4">
        {/* FIX CỨNG: Mobile cao 150px, Desktop cao 192px (để tổng 2 cái + gap = 400px) */}
        {renderCard(subPost1, 'h-[150px] lg:h-[192px]', false)}
        {renderCard(subPost2, 'h-[150px] lg:h-[192px]', false)}
      </div>

    </div>
  );
}