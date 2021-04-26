module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primaryRed: "#F94144",
                primaryRedHover: "rgba(249, 65, 68, 0.38)",
                react: "#6461EA",
                nextJS: "#5A5A5A",
                graphql: "#C710A9",
                reactNative: "#ABABAB",
                nodeJS: "#46A360",
                lightWhite: "rgba(255, 255, 255, 0.3)",
                lighterWhite: "rgba(255, 255, 255, 0.05)",
                overlay: "rgba(0, 0, 0, 0.65)",
                black: "#2F2F2F",
            },
            borderColor: (theme) => ({
                lightBlack: "#2D2D2D",
            }),
            fontSize: {
                nav: "1.05rem",
                heroSize: "5.5rem",
            },
            flex: {
                2: "2 2 0%",
                1.5: "1.5 1.5 0%",
            },
            fontFamily: {
                zilla: ["Zilla Slab", "serif"],
            },
        },
        variant: {
            extend: {
                display: ["group-hover", "hover"],
                borderRadius: ["group-hover", "hover"],
            },
        },
        fontFamily: ["Raleway", "Zilla Slab"],
        container: {
            center: true,
            padding: {
                DEFAULT: "2rem",
            },
        },
        screens: {
            xs: "640px",
            sm: "768px",
            md: "1024px",
            lg: "1280px",
            xl: "1300px",
            "2xl": "1700px",
            "3xl": "2000px",
        },
    },
    container: {
        center: true,
    },
    variants: {
        extend: {},
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    width: "100%",
                    // marginLeft: 'auto',
                    // marginRight: 'auto',
                    // paddingLeft: '2rem',
                    // paddingRight: '2rem',
                    "@screen sm": {
                        maxWidth: "80%",
                    },
                    "@screen md": {
                        maxWidth: "90%",
                    },
                    "@screen lg": {
                        maxWidth: "1024px",
                    },
                    "@screen xl": {
                        maxWidth: "1280px",
                    },
                },
            });
        },
    ],
};
