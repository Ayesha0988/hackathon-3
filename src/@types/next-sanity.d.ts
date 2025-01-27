declare module 'next-sanity' {
  interface SanityClientConfig {
    projectId: string;
    dataset: string;
    apiVersion: string;
    useCdn?: boolean;
  }

  export function createClient(config: SanityClientConfig): SanityClient; // Specify the config type and return type
  export const groq: (query: TemplateStringsArray) => Promise<unknown>; // Define groq to accept template literals and return a promise with a more generic type
}
