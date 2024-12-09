// joke-response.ts
export interface JokeResponse {
  readonly error: boolean;
  readonly category: string;
  readonly type: string;
  readonly joke: string;
  readonly flags: Record<string, boolean>;
  readonly id: string;
  readonly safe: boolean;
  readonly lang: string;
}
