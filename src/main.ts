// External links regexp, they start by one of those: 'http://', 'https://', '//'

export const splitStringEvery = (string: string, every: number, char: string) => {
  return Array.from(string.trim())
    .reduce((prev, current, index) => {
      if ((index + 1) % every === 0) return prev + current + char;
      return prev + current;
    }, "")
    .trim();
};

export default splitStringEvery;
