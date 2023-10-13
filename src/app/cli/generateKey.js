import crypto from "node:crypto";

export default async function generateKey() {
  return await crypto.randomBytes(16).toString("hex");
}

generateKey().then((x) => console.log(x));
