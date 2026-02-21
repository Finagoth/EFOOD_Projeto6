import type { CheckoutPayload, CheckoutResponse } from "./checkoutType";

const CHECKOUT_URL = "https://api-ebac.vercel.app/api/efood/checkout";

export async function postCheckout(payload: CheckoutPayload): Promise<CheckoutResponse> {
    const res = await fetch(CHECKOUT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Falha no checkout: ${res.status} ${res.statusText} ${text}`);
    }

    return res.json();
}