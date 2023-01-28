import * as fs from "fs";

export default defineEventHandler((event) => {
    const yaml = `
image:
  tag: latest
  repository: alpine
  pullPolicy: always
  ts: ${Date.now()}
    `
    return {
        yaml
    };
})
