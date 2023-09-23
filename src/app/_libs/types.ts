export type TObtainPair = {
  access: string;
  refresh: string;
};

export type TTokenPayload = {
  token_type: string;
  exp: number;
  iat: number;
  jit: string;
  account_identifier: string;
};
