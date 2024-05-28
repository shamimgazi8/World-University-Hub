const HandleRemoveFilter = (
  item: any,
  jobQueryParams: any,
  setQueryParams: any
) => {
  let newFiltercountry;
  let newFilterstudyLevel;
  let newFiltersubject;
  let newFilterintake;
  let newFilterduration;
  let newFilterenglishTest;
  let newFilteracademicTest;
  let newFilterScholarship;
  let newFilterAttendance;

  jobQueryParams?.countrySlug &&
    jobQueryParams?.countrySlug?.map((cs: any) => {
      cs === item
        ? (newFiltercountry = jobQueryParams?.countrySlug.filter(
            (data: any) => data !== item
          ))
        : "";
    });

  jobQueryParams?.studyLevel &&
    jobQueryParams?.studyLevel?.map((cs: any) => {
      cs === item
        ? (newFilterstudyLevel = jobQueryParams?.studyLevel.filter(
            (data: any) => data !== item
          ))
        : "";
    });

  jobQueryParams?.subject &&
    jobQueryParams?.subject?.map((cs: any) => {
      cs === item
        ? (newFiltersubject = jobQueryParams?.subject.filter(
            (data: any) => data !== item
          ))
        : "";
    });
  jobQueryParams?.intake &&
    jobQueryParams?.intake?.map((cs: any) => {
      cs === item
        ? (newFilterintake = jobQueryParams?.intake.filter(
            (data: any) => data !== item
          ))
        : "";
    });
  jobQueryParams?.duration &&
    jobQueryParams?.duration?.map((cs: any) => {
      cs === item
        ? (newFilterduration = jobQueryParams?.duration.filter(
            (data: any) => data !== item
          ))
        : "";
    });
  jobQueryParams?.englishTest &&
    jobQueryParams?.englishTest?.map((cs: any) => {
      cs === item
        ? (newFilterenglishTest = jobQueryParams?.englishTest.filter(
            (data: any) => data !== item
          ))
        : "";
    });
  jobQueryParams?.academicTest &&
    jobQueryParams?.academicTest?.map((cs: any) => {
      cs === item
        ? (newFilteracademicTest = jobQueryParams?.academicTest.filter(
            (data: any) => data !== item
          ))
        : "";
    });
  jobQueryParams?.Scholarship &&
    jobQueryParams?.Scholarship?.map((cs: any) => {
      cs === item
        ? (newFilterScholarship = jobQueryParams?.Scholarship.filter(
            (data: any) => data !== item
          ))
        : "";
    });
  jobQueryParams?.Attendance &&
    jobQueryParams?.Attendance?.map((cs: any) => {
      cs === item
        ? (newFilterAttendance = jobQueryParams?.Attendance.filter(
            (data: any) => data !== item
          ))
        : "";
    });
  setQueryParams({
    countrySlug: newFiltercountry
      ? newFiltercountry
      : jobQueryParams?.countrySlug,
    studyLevel: newFilterstudyLevel
      ? newFilterstudyLevel
      : jobQueryParams?.studyLevel,
    subject: newFiltersubject ? newFiltersubject : jobQueryParams?.subject,
    intake: newFilterintake ? newFilterintake : jobQueryParams?.intake,
    duration: newFilterduration ? newFilterduration : jobQueryParams?.duration,
    englishTest: newFilterenglishTest
      ? newFilterenglishTest
      : jobQueryParams?.englishTest,
    academicTest: newFilteracademicTest
      ? newFilteracademicTest
      : jobQueryParams?.englishTest,
    Scholarship: newFilterScholarship
      ? newFilterScholarship
      : jobQueryParams?.Scholarship,
    Attendance: newFilterAttendance
      ? newFilterAttendance
      : jobQueryParams?.Attendance,
  });
};

export default HandleRemoveFilter;
