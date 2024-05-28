"use client";
import { Pagination } from "antd";
import { useRouter } from "next/navigation";

interface propTypes {
  onChange?: any;
  total?: any;
  limit?: any;
  page?: any;
  fromServerSide?: boolean;
  redirectUrl?: string;
}

const PaginationComponent = ({
  onChange,
  total,
  limit,
  page,
  fromServerSide,
  redirectUrl,
}: propTypes) => {
  const router = useRouter();

  const redirectTo = (pageNumber: any) => {
    router.push(`${redirectUrl}?page=${pageNumber}`, { scroll: false });
  };
  return (
    <div className="flex justify-end">
      <Pagination
        onChange={fromServerSide ? redirectTo : onChange}
        total={total}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        current={page}
        defaultPageSize={limit}
        defaultCurrent={page}
        showSizeChanger={false}
      />
    </div>
  );
};

export default PaginationComponent;
