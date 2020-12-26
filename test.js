const fs = require("fs");
const test = require("ava");
const isPRJ = require("./is-prj");

test("identify buffer", async t => {
  const buffer = fs.readFileSync("./data/michigan_lld.prj");
  const { result } = isPRJ({
    data: buffer,
    debug: false
  });
  t.true(result);
});

test("identify non prj", async t => {
  const buffer = fs.readFileSync("./data/flower.jpg");
  const { result } = isPRJ({
    data: buffer,
    debug: false
  });
  t.false(result);
});
