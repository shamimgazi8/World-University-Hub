import BlogCategory from "@/modules/blog/category";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;

async function getData(catSlug: any, limit: any) {
  try {
    const response = await fetch(
      `${apiUrl}/public/blog?limit=${limit}&category=${catSlug}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
      }
    );
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

const BlogCategoryPage = async ({ params }: any) => {
  const limit = 5;
  const catSlug = params.category_slug;
  const data = await getData(catSlug, limit);
  const dataArray = data?.data;
  const total = data?.totalCount - limit;
  const excludeBlogIds = dataArray && dataArray?.map((item: any) => item.id);

  return (
    <BlogCategory
      data={dataArray}
      catSlug={catSlug}
      total={total}
      excludeBlogIds={excludeBlogIds}
    />
  );
};

export default BlogCategoryPage;
