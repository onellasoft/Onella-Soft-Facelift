
import { BlogCard } from './BlogCard';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const blogPosts = [
  {
    id: 'blog-industrial-marketing',
    title: '4 Reasons Why Digital Marketing For Industrial Products Is So Powerful',
    href: '/blogs/industrial-marketing',
  },
  {
    id: 'blog-ai-tools',
    title: 'Unleashing the Power of AI: The Best AI Tools for Digital Marketing in 2025',
    href: '/blogs/ai-tools-for-digital-marketing',
  },
  {
    id: 'blog-healthcare-social-media',
    title: '4 Best Practices to Elevate Your Healthcare Marketing with Social Media',
    href: '/blogs/healthcare-social-media',
  },
  {
    id: 'blog-gpt4o',
    title: "Chat GPT-4o: OpenAI's Next-Generation AI",
    href: '/blogs/gpt-4o',
  },
  {
    id: 'blog-healthcare-revolution',
    title: 'How Digital Marketing is Revolutionizing the Healthcare Industry',
    href: '/blogs/healthcare-revolution',
  },
  {
    id: 'blog-ecommerce-seo',
    title: 'How Digital Marketing Fuels Your E-commerce Business',
    href: '/blogs/ecommerce-seo',
  },
  {
    id: 'blog-seo-ux',
    title: "Why SEO & UX Are Your Website's Dream Team",
    href: '/blogs/seo-ux',
  },
  {
    id: 'blog-product-photography',
    title: 'The Power of Professional Product Photography: Sell More, Look Better!',
    href: '/blogs/product-photography',
  },
];

export function BlogGrid() {
  const postsWithImages = blogPosts.map(post => {
    const image = PlaceHolderImages.find(img => img.id === post.id);
    return { ...post, image };
  }).filter(post => post.image);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {postsWithImages.map(post => (
        <BlogCard
          key={post.id}
          title={post.title}
          imageUrl={post.image.imageUrl}
          imageAlt={post.image.description}
          imageHint={post.image.imageHint}
          href={post.href}
        />
      ))}
    </div>
  );
}
