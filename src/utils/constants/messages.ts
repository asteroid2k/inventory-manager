export default {
  RESOURCE_EXISTS: (resource: string) => `${resource} already exists.`,
  RESOURCE_NOT_FOUND: (resource: string): string => `${resource} not found.`,
};
