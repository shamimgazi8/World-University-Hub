import Link from "next/link";

interface propTypes {
  data?: any;
  showCourse?: boolean;
  key?: any;
}

const BestStudentCitiesCart = ({ data, key }: propTypes) => {
  const link = `/universities/${data?.slug}`;
  console.log(data, "key");

  const uniqueNames: any = {};
  const uniqueArray: any = [];
  if (data && data?.uni_rankings?.length > 0) {
    for (const obj of data?.uni_rankings) {
      const name = obj.companySlug;
      if (!uniqueNames[name]) {
        uniqueNames[name] = true;
        uniqueArray.push(obj);
      }
    }
  }

  return (
    <Link href={"/"}>
      <div className="border py-[20px]  rounded">
        <div className=" grid grid-cols-[100px_1fr_1fr_1fr]">
          <div className=" px-3 py-2 flex justify-center items-center">
            {data?.uni_rankings[0]?.rankDisplay}
          </div>
          <div className=" px-3 py-2">{data?.city}</div>
          <div className=" px-3 py-2">1784</div>
          <div className=" px-3 py-2">5123</div>
        </div>
      </div>
    </Link>
  );
};

export default BestStudentCitiesCart;
