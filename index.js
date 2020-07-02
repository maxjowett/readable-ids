import { adjectives, nouns } from './lib/index.js';

const getRandomAdjective = () => {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
};

const getRandomNoun = () => {
  return nouns[Math.floor(Math.random() * nouns.length)];
};

const generateId = () => {
  return `${getRandomAdjective()}-${getRandomNoun()}`;
};
