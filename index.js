import { adjectives, nouns } from './lib/index.js';

const verifyConfig = config => {
  const { theme } = config || '';
  const { useNumbers } = config || '';

  let verifiedConfig = {
    selectedTheme: 'dark',
    useNumbers: false
  };

  if (theme === 'dark' || theme == 'bright') {
    verifiedConfig.selectedTheme = theme;
  }

  if (useNumbers === true) {
    verifiedConfig.useNumbers = true;
  }

  return generateId(verifiedConfig);
};

const getRandomAdjective = () => {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
};

const getRandomNoun = () => {
  return nouns[Math.floor(Math.random() * nouns.length)];
};

const generateId = config => {
  console.log('Config: ', config);
  return `${getRandomAdjective()}-${getRandomNoun()}`;
};
