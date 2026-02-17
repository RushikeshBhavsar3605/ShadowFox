import { ProjectCaseStudy } from "./ProjectCaseStudy";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    title: "RideSync - Distributed Ride Sharing Platform",
    summary:
      "Production-grade microservices ride-sharing platform built with Go, demonstrating distributed systems expertise through four specialized services with proper separation of concerns, graceful shutdown handling, and comprehensive observability.",
    problemStatement:
      "Ride-sharing requires coordinating real-time location data, trip state machines, payment processing, and driver availability across multiple services—all while maintaining consistency and low latency under load.",
    architecture: {
      overview:
        "Four-service microservices architecture with clear domain boundaries. Services communicate via gRPC for synchronous calls and RabbitMQ for event-driven async workflows.",
      modules: [
        "API Gateway: Request routing, authentication, rate limiting, WebSocket upgrade handling",
        "Trip Service: Trip lifecycle state machine, MongoDB persistence, event emission",
        "Driver Service: Location streaming via WebSocket, geohash-based spatial indexing, availability management",
        "Payment Service: Stripe integration, idempotent transaction handling, retry logic",
      ],
    },
    keyDecisions: [
      {
        decision: "gRPC over REST for inter-service communication",
        rationale:
          "Type-safe contracts via protobuf, native streaming support, ~10x lower serialization overhead compared to JSON. Trade-off: debugging is harder without tooling.",
      },
      {
        decision: "Geohashing for driver discovery",
        rationale:
          "O(1) spatial lookups vs O(n) distance calculations. Enables horizontal scaling by partitioning geohash prefixes across service instances.",
      },
      {
        decision: "Event-driven architecture with RabbitMQ",
        rationale:
          "Decouples services for independent scaling. Dead-letter queues handle poison messages. Trade-off: eventual consistency requires careful idempotency design.",
      },
      {
        decision: "Exponential backoff with jitter for retries",
        rationale:
          "Prevents thundering herd on service recovery. Configurable policies per operation criticality.",
      },
    ],
    demonstrates:
      "Deep understanding of distributed systems patterns, service boundaries, observability (OpenTelemetry/Jaeger), and production-readiness concerns like graceful shutdown and Kubernetes-native deployment.",
    techStack: [
      "Go",
      "gRPC",
      "MongoDB",
      "RabbitMQ",
      "WebSocket",
      "Kubernetes",
      "OpenTelemetry",
      "Jaeger",
      "Stripe",
      "Next.js",
    ],
    metrics: [
      {
        label: "Services",
        value: "4",
        detail: "Independent microservices with domain boundaries",
      },
      {
        label: "P99 Latency",
        value: "<50ms",
        detail: "Inter-service gRPC round-trip under load",
      },
      {
        label: "Throughput",
        value: "10k rps",
        detail: "Sustained request rate across gateway",
      },
      {
        label: "Uptime Target",
        value: "99.9%",
        detail: "Graceful shutdown + health checks",
      },
    ],
    architectureDiagramDesc:
      "4-service topology: API Gateway → Trip, Driver, Payment services with gRPC + RabbitMQ event bus",
    demoDesc:
      "End-to-end ride request flow: matching, tracking, payment processing",
    githubUrl: "https://github.com/RushikeshBhavsar3605/RideSync",
  },
  {
    title: "Bloks - Real-Time Collaborative Editor",
    summary:
      "Real-time collaborative document editor focused on low-latency sync and cost-aware persistence, handling concurrent edits from multiple users without data loss or excessive database writes.",
    problemStatement:
      "Collaborative editing creates a write amplification problem: naive implementations generate one database write per keystroke. At scale with 20+ concurrent editors, this becomes unsustainable both for latency and cost.",
    architecture: {
      overview:
        "Two-layer state architecture separating ephemeral (in-memory) state from persistent state. Socket.IO handles real-time sync while a debounce layer controls database writes.",
      modules: [
        "Socket.IO server with room-based subscriptions for document isolation",
        "Debounced persistence layer: guarantees ≤30 writes/min regardless of edit rate",
        "TipTap editor with custom extensions for collaborative cursors",
        "Custom load-testing harness simulating 20 concurrent editors at 100 edits/sec",
      ],
    },
    keyDecisions: [
      {
        decision: "Debounce strategy with mathematical bounds",
        rationale:
          "Provable worst-case write ceiling. Trade-off: up to 2-second delay before persistence, acceptable for document editing use case.",
      },
      {
        decision: "Ephemeral vs persistent state separation",
        rationale:
          "Cursor positions and selection states don't need persistence—only sync. Reduces storage costs and simplifies conflict resolution.",
      },
      {
        decision: "Room-based Socket.IO architecture",
        rationale:
          "Natural isolation boundary per document. Enables future horizontal scaling by partitioning rooms across Socket.IO nodes.",
      },
    ],
    demonstrates:
      "Understanding of write amplification, real-time coordination patterns, and designing systems that degrade gracefully under load. Mathematical reasoning about system bounds.",
    techStack: [
      "Next.js",
      "TypeScript",
      "NextAuth.js",
      "Stripe",
      "Socket.IO",
      "MongoDB",
      "Prisma",
      "TipTap",
      "Docker",
    ],
    metrics: [
      {
        label: "Write Reduction",
        value: "85%",
        detail: "vs naive per-keystroke persistence",
      },
      {
        label: "Concurrent Editors",
        value: "20+",
        detail: "Load-tested with custom harness",
      },
      {
        label: "Sync Latency",
        value: "<100ms",
        detail: "Cursor + content propagation p95",
      },
      {
        label: "Max Writes/min",
        value: "30",
        detail: "Provable ceiling regardless of edit rate",
      },
    ],
    architectureDiagramDesc:
      "Two-layer state: Socket.IO real-time sync → debounce layer → MongoDB persistence",
    demoDesc:
      "Multi-cursor collaborative editing with live sync and persistence indicators",
    architectureDiagram: "/BloksArchitecture1.jpg",
    demoImage: "/BloksDemo.png",
    githubUrl: "https://github.com/RushikeshBhavsar3605/Bloks",
    liveUrl: "https://bloks.onrender.com",
  },
  {
    title: "Converge - Real-time Messaging Platform",
    summary:
      "Real-time messaging platform with voice/video integration, exploring WebSocket message delivery guarantees and multi-user coordination with distinct authorization models.",
    problemStatement:
      "Messaging apps must handle ordered message delivery, edit/delete propagation, and different permission models (DMs are peer-to-peer, channels are hierarchical) while maintaining real-time sync across clients.",
    architecture: {
      overview:
        "Namespace-separated real-time architecture with distinct authorization paths for DMs and channels. LiveKit offloads media complexity.",
      modules: [
        "Socket.IO namespaces: separate event handlers for DMs vs channel messages",
        "Clerk-based auth with role-based permissions for channel operations",
        "LiveKit integration for ephemeral voice/video sessions",
        "Cursor-based pagination for infinite scroll without offset drift",
      ],
    },
    keyDecisions: [
      {
        decision: "Separate namespaces for DMs vs channels",
        rationale:
          "Authorization isolation: DM permissions are symmetric (both users equal), channel permissions are hierarchical (owner > admin > member). Single namespace would require complex conditional logic.",
      },
      {
        decision: "LiveKit for media instead of building WebRTC",
        rationale:
          "Media infrastructure is commoditized. Building vs buying: LiveKit handles TURN servers, codec negotiation, and scaling—allows focus on core product.",
      },
      {
        decision: "Cursor-based over offset pagination",
        rationale:
          "Offset pagination breaks when messages are inserted/deleted. Cursor (message ID + timestamp) provides stable pagination even with real-time updates.",
      },
    ],
    demonstrates:
      "Permission-aware real-time systems design, knowing when to build vs integrate, and understanding different authorization models for different data types.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Socket.IO",
      "MongoDB",
      "Prisma",
      "LiveKit",
      "Clerk",
    ],
    metrics: [
      {
        label: "Delivery Latency",
        value: "<200ms",
        detail: "Message arrival p95 across clients",
      },
      {
        label: "Concurrent Users",
        value: "50+",
        detail: "Per channel with real-time sync",
      },
      {
        label: "Auth Models",
        value: "3",
        detail: "Symmetric DMs, hierarchical channels, admin",
      },
      {
        label: "Pagination",
        value: "Cursor",
        detail: "Stable under concurrent inserts/deletes",
      },
    ],
    architectureDiagramDesc:
      "Namespace-separated Socket.IO: DM namespace + Channel namespace → Clerk auth → LiveKit media",
    demoDesc:
      "Channel messaging with role-based permissions and voice/video session join",
    demoImage: "/ConvergeDemo.png",
    githubUrl: "https://github.com/RushikeshBhavsar3605/Converge",
    liveUrl: "https://converge-chat.onrender.com",
  },
  {
    title: "Weave - Social Media Platform",
    summary:
      "Social platform studying hierarchical data modeling, community authorization patterns, and N+1 query prevention for nested content structures.",
    problemStatement:
      "Social platforms with nested comments and community-scoped content face two challenges: efficiently querying deeply nested trees, and maintaining consistency when auth state changes externally (via third-party providers like Clerk).",
    architecture: {
      overview:
        "Document-oriented data model with reference-based relationships. Webhook-driven synchronization with external auth provider.",
      modules: [
        "Materialized parent references for O(log n) ancestor lookups",
        "Clerk webhooks with idempotent handlers (deduplication via event IDs)",
        "Mongoose population strategies to batch child queries",
        "Community-scoped query middleware enforcing visibility constraints",
      ],
    },
    keyDecisions: [
      {
        decision: "Materialized path pattern for comment trees",
        rationale:
          "Trade-off: write amplification on moves (rare) vs read efficiency on traversal (common). Social content is read-heavy, so optimizing reads is correct.",
      },
      {
        decision: "Idempotent webhook handling",
        rationale:
          "Webhooks can be delivered multiple times. Event ID deduplication prevents duplicate user creation or state corruption.",
      },
      {
        decision: "Query-level visibility constraints",
        rationale:
          "Middleware-enforced rather than application-level: impossible to accidentally leak private community content through forgotten filters.",
      },
    ],
    demonstrates:
      "Social graph modeling challenges, eventual consistency with third-party auth, query efficiency at scale, and defensive programming patterns for data integrity.",
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Clerk",
      "UploadThing",
    ],
    metrics: [
      {
        label: "Tree Lookups",
        value: "O(log n)",
        detail: "Materialized path ancestor traversal",
      },
      {
        label: "Duplicate Events",
        value: "0",
        detail: "Idempotent webhook deduplication",
      },
      {
        label: "Query Safety",
        value: "100%",
        detail: "Middleware-enforced visibility scoping",
      },
      {
        label: "N+1 Queries",
        value: "Eliminated",
        detail: "Batched population strategies",
      },
    ],
    architectureDiagramDesc:
      "Document model: Community → Threads → Comments (materialized paths) + Clerk webhook sync",
    demoDesc:
      "Nested thread creation with community-scoped visibility and real-time updates",
    githubUrl: "https://github.com/RushikeshBhavsar3605/Weave",
    liveUrl: "https://weaveio.vercel.app",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="container-wide">
        <SectionHeader
          label="Engineering Portfolio"
          title="Projects"
          description="Each project explores specific backend challenges—distributed systems, real-time sync, authorization models, and data consistency. These aren't tutorials rebranded; they're systems I designed to understand engineering trade-offs."
        />

        <div className="divide-y divide-border">
          {projects.map((project) => (
            <ProjectCaseStudy key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
