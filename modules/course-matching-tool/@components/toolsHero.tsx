interface propsType {
  title?: string;
  placeholder?: string;
  shortDescription?: string;
  breadcrumb?: any;
}

const ToolsHeroTwo = ({
  title,
  shortDescription,
  placeholder,
  breadcrumb,
}: propsType) => {
  return (
    <section className="py-8 lg:py-[60px] bg-gradient-to-b from-primary-light to-secondary-light">
      <div className="container">
        <div className="max-w-[640px] w-full mx-auto text-center">
          {title ? <h1 className="h4 mb-1">{title}</h1> : null}
          {shortDescription ? <p className="">{shortDescription}</p> : null}
          {breadcrumb ? (
            <div className="flex justify-center">{breadcrumb}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ToolsHeroTwo;
