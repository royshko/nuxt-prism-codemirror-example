import * as fs from "fs";

export default defineEventHandler((event) => {

    return fs.readFileSync('data/dockerfiles.json', {encoding: 'utf-8'});
})
