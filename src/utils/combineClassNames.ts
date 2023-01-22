export const cc = (classNames: Array<unknown>) => {
  const result = classNames.filter(
    (i) => typeof i === 'string' && i.length > 0
  );
  if (result.length < 1) return undefined;
  return result.join(' ');
};
