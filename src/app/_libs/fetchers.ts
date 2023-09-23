export const tokenRefresh = async (refreshToken: string) => {
  return await fetch(`${process.env.BACKEND_URL}/api/auth/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refreshToken }),
  });
};
