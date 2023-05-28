/* eslint-disable eslint-comments/disable-enable-pair -- not important */
/* eslint-disable no-console -- not important */
"use strict";

const glob = require("glob").sync;
const fs = require("fs");

console.log("Running ECM.js");

const allPathsInProject = glob("**/*", { absolute: true });

console.log("found", allPathsInProject.length, "paths in project");

// write to text file in project root called 'allPathsInProject.json
fs.writeFileSync(
    "allPathsInProject.json",
    JSON.stringify(allPathsInProject, null, 2)
);

console.log("done");
