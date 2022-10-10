const path = require("path");

const relativePrefix = "./src/";
const scssLibraryFiles = [
    "index.scss",
    "display/flex.scss",
    "display/grid.scss",
    "variables/root.variables.scss",
    "spacing/padding.scss",
    "spacing/margin.scss",
    "breakpoints/breakpoints.scss",
    "display/layout.scss",
    "units/_units.scss",
    "mixins/create_bg_container.scss",
];

const resolveFiles = scssLibraryFiles.map(
    (filePath) => {
        const pathToResolve = relativePrefix + filePath;
        return path.resolve(__dirname, pathToResolve);
    }
);

module.exports = {
    resolveFiles,
    output: {
        filename: "desert.js",
        path: path.resolve(__dirname, 'package'),
    },
}