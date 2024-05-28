"use client";

const BlogGroupCatList = ({
  setIndex,
  dataIndex,
  data,
  slug,
  setSlug,
}: any) => {
  return (
    <>
      {data?.blogs?.length > 0 ? (
        <li
          className={`bg-[#eee] rounded btn ${
            slug == data.slug ? "btn-primary" : ""
          }`}
          onClick={() => {
            setSlug(data?.slug);
            setIndex(dataIndex);
          }}
        >
          {data?.name}
        </li>
      ) : null}
    </>
  );
};

export default BlogGroupCatList;
