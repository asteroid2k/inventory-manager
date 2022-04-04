export default {
  RESOURCE_EXISTS: (resource: string) => `${resource} already exists.`,
  RESOURCE_NOT_FOUND: (resource: string): string => `${resource} not found.`,
  RESOURCE_CREATED: (resource: string): string => `${resource} created.`,
  INVALID_AUTH_CREDENTIALS: "Invalid credentials"
};
