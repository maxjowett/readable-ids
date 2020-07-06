import fs from 'fs';
import readline from 'readline';

export const handleConfig = async config => {
  const { theme, useNumbers } = config;
  const adjectives = [];
  const nouns = [];

  const adjectiveStream = readline.createInterface({
    input: fs.createReadStream(`./lib/${theme}/adjectives.txt`),
    output: process.stdout,
    terminal: false
  });

  for await (const line of adjectiveStream) {
    adjectives.push(line);
  }

  const nounStream = readline.createInterface({
    input: fs.createReadStream(`./lib/${theme}/nouns.txt`),
    output: process.stdout,
    terminal: false
  });

  for await (const line of nounStream) {
    nouns.push(line);
  }

  return { adjectives, nouns };
};
