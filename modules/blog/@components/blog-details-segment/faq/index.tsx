import { htmlParse } from "@/helpers/utils";
import { Collapse, CollapseProps } from "antd";
import React from "react";

const BlogDetailsFaq = ({ data }: any) => {
  const parseData = data && JSON.parse(data);
  const items = parseData?.map((item: any, i: any) => ({
    key: i + 1,
    label: item?.question,
    children: htmlParse(item?.answer),
  }));

  return (
    <Collapse
      expandIconPosition="end"
      items={items}
      accordion={true}
      size="large"
      bordered={false}
      defaultActiveKey={["1"]}
      className="flex flex-col gap-[15px] blog-details mb-5"
    />
  );
};

export default BlogDetailsFaq;
