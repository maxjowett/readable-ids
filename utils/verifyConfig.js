export const verifyConfig = config => {
  const { theme } = config || '';
  const { useNumbers } = config || '';

  let verifiedConfig = {
    theme: 'dark',
    useNumbers: false
  };

  if (theme === 'dark' || theme == 'bright') {
    verifiedConfig.theme = theme;
  }

  if (useNumbers === true) {
    verifiedConfig.useNumbers = true;
  }

  return verifiedConfig;
};
