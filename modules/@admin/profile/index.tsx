import Link from "next/link";

const AccountPageCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <Link href="/user/profile/personal-information">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Personal Info
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">
          Personal Details, Social Link and Language
        </p>
        <Link
          href="/user/profile/personal-information"
          className="btn btn-primary rounded"
        >
          Edit
        </Link>
      </div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <Link href="/user/profile/academic-background">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Academic Background
            {/* <span className="ml-1 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Not Completed
            </span> */}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">
          Previous Qualification, Academic Test Score and English Test Score
        </p>
        <div className="flex justify-between">
          <Link
            href="/user/profile/academic-background"
            className="btn btn-primary rounded"
          >
            Edit
          </Link>
          {/* <span className="ml-1 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            Not Completed
          </span> */}
        </div>
      </div>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <Link href="/user/profile/account-settings">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Account Settings
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">Change Password</p>
        <Link
          href="/user/profile/account-settings"
          className="btn btn-primary rounded"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default AccountPageCards;
