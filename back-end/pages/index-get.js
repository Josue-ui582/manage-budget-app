"use strict";
/* eslint-env node, es6 */

const { readFile } = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(readFile);

const READ_OPTIONS = { encoding: "utf-8"}
const INDEX_URL = "D:/Projets/Getionnaire-de-budget/front-end/app/app.html"

module.exports = async () => {
    try {
        const contenu = await readFileAsync(INDEX_URL, READ_OPTIONS);
        return contenu;
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
        throw error;
    }
};