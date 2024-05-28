import Link from "next/link";

const SectionLearnMore = () => {
  return (
    <section className="bg-gradient-to-b from-primary-light to-secondary-light pt-10 pb-10 lg:pt-[60px] lg:pb-[60px]">
      <div className="container">
        <div className="max-w-[930px] mx-auto text-center">
          <h3>Your first stop on your journey to study abroad</h3>
          <p className="max-w-[900px] mx-auto">
            At World Uni Hub, we believe that students who study abroad become
            the next generation of globally-minded adventurers and leaders - and
            we want more of you to do it! Every year, our search engine helps
            over 8 million students connect with some of the best universities
            and schools around the world.
          </p>
          <div className="flex justify-center mt-7">
            <Link href="/about-us" className="btn btn-primary rounded">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLearnMore;
