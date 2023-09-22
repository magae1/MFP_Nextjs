import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const cookiesStore = cookies();
  const refreshToken = cookiesStore.get("refresh");

  if (!refreshToken) redirect("/login");
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/refresh/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refreshToken.value }),
  });

  if (!res.ok) redirect("/login");
  return res;
}
