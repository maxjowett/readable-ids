import fs from 'fs';

import { verifyConfig, handleConfig } from './utils/index.js';

const assembleId = parts => {
  const { adjectives, nouns, number } = parts;

  let adjective = `${adjectives[Math.floor(Math.random() * adjectives.length)]}`;
  let noun = `${nouns[Math.floor(Math.random() * nouns.length)]}`;
  return number ? `${adjective}-${noun}-${number}` : `${adjective}-${noun}`;
};

const createId = config => {
  let verifiedConfig = verifyConfig(config);
  const elements = handleConfig(verifiedConfig);
  return assembleId(elements);
};

export default createId;
