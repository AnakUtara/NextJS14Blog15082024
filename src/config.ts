import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { config } from "dotenv";
import { resolve } from "path";

export const NODE_ENV = process.env.NODE_ENV || "development";

const envFile = NODE_ENV === "development" ? ".env.development" : ".env";

config({ path: resolve(__dirname, `../${envFile}`) });
config({ path: resolve(__dirname, `../${envFile}.local`), override: true });

export const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN;

export const cookiesOpt: Partial<ResponseCookie> = {
	sameSite: "strict",
	secure: true,
	domain: COOKIE_DOMAIN,
};
