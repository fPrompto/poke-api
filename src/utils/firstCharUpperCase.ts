export const firstCharUpperCase = (string: string) => {
  try {
    return string.charAt(0).toUpperCase() + string.slice(1)
  } catch (e) {
    console.log('firstChar error', e);
  }
};
