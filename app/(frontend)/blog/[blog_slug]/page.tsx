import BlogDetails from "@/modules/blog/details";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: any) {
  const data = await fetch(`${apiUrl}/public/blog/${params.blog_slug}`).then(
    (res) => res.json()
  );
  return {
    title: data?.title,
    keywords: data?.metaKeyword,
    description: data?.metaDescription,
    openGraph: {
      url: `${baseUrl}/blog/${data?.slug}`,
      siteName: "World University Hub",
      title: data?.metaTitle,
      description: data?.metaDescription,
      // images: [data?.featuredImage],
      locale: "en_US",
      type: "article",
    },
  };
}

async function getData(params: any) {
  try {
    const res = await fetch(`${apiUrl}/public/blog/${params.blog_slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const BlogDetailPage = async ({ params }: any) => {
  const data = await getData(params);

  return <BlogDetails data={data} />;
};

export default BlogDetailPage;
