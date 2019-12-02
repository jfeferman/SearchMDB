import Container from './utils/Container';
import app from './providers/app';

/**
 * Unused - to be implemented.
 */
export default () => {
  const ioc = new Container();
  app(ioc);
  return ioc;
};
