/**
 * Utility to make GraphQL requests to WordPress.
 */
export async function fetchGraphQL(query, variables = {}) {
  const apiUrl = import.meta.env.VITE_WP_API_URL;
  if (!apiUrl) {
    throw new Error('VITE_WP_API_URL is not defined in environment variables');
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await response.json();
    if (json.errors) {
      console.error('GraphQL errors:', json.errors);
      throw new Error(json.errors[0]?.message || 'GraphQL error');
    }

    return json.data;
  } catch (error) {
    console.error('Failed to fetch from WPGraphQL:', error);
    throw error;
  }
}
