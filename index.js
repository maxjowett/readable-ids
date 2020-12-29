const words = require('./lib/words.js');

const DEFAULT_CONFIG = {
  useNumbers: true,
  useLeadingZeros: true,
  namespace: 'default'
};

const NAMESPACE_MAP = {
  default: 16,
  large: 64
};

function verifyConfig(config) {
  // Parse config by checking if the necessary keys exist,
  // if they don't, fallback to `DEFAULT_CONFIG`
}
