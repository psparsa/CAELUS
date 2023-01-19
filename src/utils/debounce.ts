export const debounce = <T extends (...args: any) => any>(
  cb: T,
  ms: number
): ((...args: Parameters<T>) => void) => {
  let t = 0;

  return (...args: [...Parameters<T>]): void => {
    clearTimeout(t);
    t = window.setTimeout(() => cb(...args), ms);
  };
};
