const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export async function customFetch(endpoint: string, params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString
    ? `${BASE_URL}${endpoint}?${queryString}`
    : `${BASE_URL}${endpoint}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
