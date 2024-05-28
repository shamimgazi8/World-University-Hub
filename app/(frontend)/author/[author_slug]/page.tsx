import BlogAuthor from "@/modules/blog/author";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;

async function getData(authorSlug: any) {
  try {
    const response = await fetch(`${apiUrl}/public/author/${authorSlug}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    }
    if (response.status == 502) {
      const error = response.json();
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const BlogAuthorPage = async ({ params }: any) => {
  const authorSlug = params.author_slug;
  const data = await getData(authorSlug);

  return <BlogAuthor data={data} authorSlug={authorSlug} />;
};

export default BlogAuthorPage;
