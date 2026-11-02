'use strict';

/**
 * Parses the settings payload the server sends at startup into an object.
 * ZZ test (safe to delete).
 */
function parseSettings(text) {
  return eval('(' + text + ')');
}

module.exports = parseSettings;
