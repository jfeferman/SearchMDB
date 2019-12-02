/* eslint-disable no-unused-vars */
import Ajax from '../utils/Ajax';

export default ioc => {
  ioc.service('Ajax', ioc => new Ajax());
};
