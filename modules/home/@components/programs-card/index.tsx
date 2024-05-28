import Image from "next/image";
import Link from "next/link";

const ProgramsCard = ({ data }: any) => {
  const courseCount = data && data?._count?.courses;
  return (
    <Link
      href={`/programs/${data?.slug}`}
      className="flex items-center gap-[15px] p-5 hover:text-inherit hover:shadow-two border hover:border-transparent hover:bg-white rounded-[10px] transition-all"
    >
      {data?.icon ? (
        <Image
          src={data?.icon}
          width={45}
          height={45}
          alt={data?.name}
          className="max-w-[45px] object-contain"
        />
      ) : null}

      <div>
        <h6 className="font-medium mb-1">{data?.name}</h6>
        <span>{`${courseCount} ${
          courseCount > 1 ? "Courses" : "Course"
        }`}</span>
      </div>
    </Link>
  );
};

export default ProgramsCard;
