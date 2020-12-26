const hasStrings = require("has-strings");

module.exports = ({ data, debug = false }) => {
  if (debug) console.log("[is-prj] starting with", data);

  const passes = (
    hasStrings({
      data,
      debug,
      strings: [ 'PROJCS', 'GEOGCS' ],
      threshold: 1
    }).result
    &&
    hasStrings({
      data,
      debug,
      strings: [
        'PROJECTEDCRS',
        'PROJCRS',
        'GEOGCS',
        'GEOCCS',
        'PROJCS',
        'LOCAL_CS',
        'GEODCRS',
        'GEODETICCRS',
        'GEODETICDATUM',
        'ENGCRS',
        'ENGINEERINGCRS'
      ],
      threshold: 1
    }).result
  );

  const output = {
    result: passes
  };

  if (debug) console.log("[is-prj] finishing with", output);

  return output;
};
