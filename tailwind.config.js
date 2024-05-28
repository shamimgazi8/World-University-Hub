/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      ibm: ["var(--font-ibm)"],
    },

    extend: {
      screens: {
        xsm: "490px",
        smd: "620px",
      },
      colors: {
        primary: "var(--m4u-clr-primary)",
        "primary-light": "var(--m4u-clr-primary-light)",
        secondary: "var(--m4u-clr-secondary)",
        "secondary-light": "var(--m4u-clr-secondary-light)",
        tertiary: "var(--m4u-clr-tertiary)",
        grey: "var(--m4u-clr-bg-gray)",
        black: "var(--m4u-clr-black)",
        hover: "var(--m4u-clr-hover)",
        header: "var(--m4u-clr-header-bg)",
        footer: "var(--m4u-clr-footer-bg)",
        footertext: "var(--m4u-clr-footer-text)",
        heading: "var(--m4u-clr-text-heading)",
        subheading: "var(--m4u-clr-text-sub-heading)",
        body: "var(--m4u-clr-text-body)",
      },

      boxShadow: {
        one: "0px 3px 10px 0px var(--m4u-clr-shadow)",
        two: "5px 5px 20px 0px var(--m4u-clr-shadow-two)",
      },

      fontSize: {
        h1: "var(--m4u-font-size-h1)",
        "h1-md": "var(--m4u-font-size-h1-md)",
        "h1-sm": "var(--m4u-font-size-h1-sm)",
        h2: "var(--m4u-font-size-h2)",
        "h2-md": "var(--m4u-font-size-h2-md)",
        "h2-sm": "var(--m4u-font-size-h2-sm)",
        h3: "var(--m4u-font-size-h3)",
        "h3-md": "var(--m4u-font-size-h3-md)",
        "h3-sm": "var(--m4u-font-size-h3-sm)",
        h4: "var(--m4u-font-size-h4)",
        "h4-md": "var(--m4u-font-size-h4-md)",
        "h4-sm": "var(--m4u-font-size-h4-sm)",
        h5: "var(--m4u-font-size-h5)",
        "h5-md": "var(--m4u-font-size-h5-md)",
        "h5-sm": "var(--m4u-font-size-h5-sm)",
        h6: "var(--m4u-font-size-h6)",
        "h6-md": "var(--m4u-font-size-h6-md)",
        "h6-sm": "var(--m4u-font-size-h6-sm)",

        p1: "var(--m4u-font-size-p1)",
        p2: "var(--m4u-font-size-p2)",
        p3: "var(--m4u-font-size-p3)",
        p4: "var(--m4u-font-size-p4)",
        p5: "var(--m4u-font-size-p5)",

        c1: "var(--m4u-font-size-c1)",
        c2: "var(--m4u-font-size-c2)",
        c3: "var(--m4u-font-size-c3)",
        c4: "var(--m4u-font-size-c4)",
        c5: "var(--m4u-font-size-c5)",
      },
    },
  },

  plugins: [],
};
