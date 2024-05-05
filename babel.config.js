module.exports = function(api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            {
                targets: {
                    browsers: ["last 2 versions", "> 5%"]
                }
            }
        ],
        "@babel/preset-react"
    ];

    const plugins = [
        [
            "babel-plugin-styled-components",
            {
                namespace: "",
                displayName: true,
                fileName: true,
                ssr: false,
                meaninglessFileNames: []
            }
        ]
    ];

    return {
        presets,
        plugins
    };
};
