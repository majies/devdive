const idCounter = new Map<string, number>();

const generateUniqueId = (prefix: string): string => {
  const prevSuffix = idCounter.get(prefix);
  const suffix = prevSuffix === undefined ? 0 : prevSuffix + 1;

  idCounter.set(prefix, suffix);

  return `${prefix}-${suffix}`;
}
