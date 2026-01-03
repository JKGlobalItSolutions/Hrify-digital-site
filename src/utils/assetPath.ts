/**
 * Helper function to get the correct asset path with base URL
 * This ensures assets work correctly in both development and production (GitHub Pages)
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};