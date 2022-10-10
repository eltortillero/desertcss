const path = require("path");

const relativePrefix = "./src/";
const scssLibraryFiles = [
    "index.scss",
    "functions/override_palette.scss",
    "display/_flex.scss",
    "display/_grid.scss",
    "variables/_root.variables.scss",
    "spacing/_padding.scss",
    "spacing/_margin.scss",
    "breakpoints/_breakpoints.scss",
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