export const verifyConfig = config => {
  const { theme } = config || '';
  const { useNumbers } = config || '';

  let verifiedConfig = {
    theme: 'default',
    useNumbers: false
  };

  if (theme === 'dark' || theme == 'random') {
    verifiedConfig.theme = theme;
  }

  if (useNumbers === true) {
    verifiedConfig.useNumbers = true;
  }

  return verifiedConfig;
};
