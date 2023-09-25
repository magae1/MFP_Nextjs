export function authHeader(accessToken: string) {
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${accessToken}`);
  return headers;
}
