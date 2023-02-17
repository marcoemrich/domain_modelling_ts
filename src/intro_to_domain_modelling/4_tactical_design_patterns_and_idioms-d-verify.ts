// # Tactical Design Pattern and idioms

import { Option } from "ts-option";

// Model State Changes explicitly!
// Model State Changes explicitly!

/* Bad Idea */
{
  type Email = {
    email: string;
    verified: boolean;
  };
}

/* Better */

type Brand<K, T> = K & { __brand: T };

type UnverifiedEmail = Brand<string, "UnverifiedEmail">;
type VerifiedEmail = Brand<string, "VerifiedEmail">;

type Email = UnverifiedEmail | VerifiedEmail;

type verifyEmail = (e: Email) => Option<VerifiedEmail>;
