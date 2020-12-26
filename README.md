# is-prj
Identify a PRJ File in a Variety of In-Memory Objects, including ArrayBuffer, Buffer, DataView, and Uint8Array

# install
```bash
npm install is-prj
```

# usage
```js
const isPRJ = require("is-prj");

const buffer = fs.readFileSync("michigan_lld.prj");
const { result } = isPRJ({
  data: buffer,
  debug: false // set debug to true to enable more logging
});
// result is true
```