# Domain Model

The app has no persisted data. The only "entity" is the static greeting text it always shows.

```mermaid
erDiagram
    GREETING {
        string message
    }
```

**Greeting** — a fixed, hard-coded piece of text ("Hello, World!"). It is not stored or edited; it is the same for every visitor.