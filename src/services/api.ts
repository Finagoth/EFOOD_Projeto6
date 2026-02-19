import { Restaurant } from "../types/efood";

const API_URL = "https://api-ebac.vercel.app/api/efood/restaurantes";

export async function getRestaurants(): Promise<Restaurant[]> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Erro ao buscar restaurantes");
    return res.json();
}

export async function getRestaurantById(id: number): Promise<Restaurant> {
    const restaurants = await getRestaurants();
    const found = restaurants.find((r) => r.id === id);
    if (!found) throw new Error("Restaurante não encontrado");
    return found;
}