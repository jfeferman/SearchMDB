/**
 * Do NOT allow using `npm` as package manager.
 */
function blue(text) {
  return `\u001b[44;1m\u001b[37;1m${text}\u001b[0m`;
}

if (process.env.npm_execpath.indexOf('yarn') === -1) {
  // eslint-disable-next-line no-console
  console.log(
    blue('*** You must use Yarn to install dependencies ***'),
    '\n',
  );
  process.exit(1);
}
