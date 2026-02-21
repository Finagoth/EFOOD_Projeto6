export type CheckoutPayload = {
  products: Array<{ id: number; price: number }>;
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

// A resposta exata depende da sua API.
// Deixo genérico, mas com campos comuns de retorno.
export type CheckoutResponse = {
  orderId?: string | number;
  message?: string;
  estimatedDeliveryTime?: string;
  total?: number;
  // fallback: caso venha qualquer outro campo
  [key: string]: unknown;
};