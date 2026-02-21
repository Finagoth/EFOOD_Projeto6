import { Restaurant } from "../types/efood";

const API_URL = "https://api-ebac.vercel.app/api/efood";

export async function getRestaurants(): Promise<Restaurant[]> {
    const url = `${API_URL}/restaurantes`;
    const res = await fetch(url);

    if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("GET restaurants falhou:", res.status, res.statusText, url, text);
        throw new Error(`Erro ao buscar restaurantes (${res.status})`);
    }

    return res.json();
}