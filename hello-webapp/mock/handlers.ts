import type { RequestHandler } from "msw";

// hello-webapp calls no API — it has no dependencies (design.json
// `dependencies: []`) — so there is nothing for a handler to answer.
export const handlers: RequestHandler[] = [];
