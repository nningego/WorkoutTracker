import sinon from 'sinon';

const getVersion = sinon.stub();
const getBuildNumber = sinon.stub();
const getDeviceLocale = sinon.stub();
const getUniqueID = sinon.stub();

getVersion.returns('1.0');
getBuildNumber.returns('1');
getDeviceLocale.returns('en-GB');
getUniqueID.returns('12345');

export default {
  getDeviceLocale,
  getVersion,
  getBuildNumber,
  getUniqueID,
};
