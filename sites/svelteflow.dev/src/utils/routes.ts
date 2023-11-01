export type Route = ExternalRoute | InternalRoute;

export type ExternalRoute = `https://${string}`;

export type InternalRoute =
  | '/'
  | '/api-reference'
  | '/api-reference/components'
  | '/api-reference/components/background'
  | '/api-reference/components/base-edge'
  | '/api-reference/components/control-button'
  | '/api-reference/components/controls'
  | '/api-reference/components/edge-label-renderer'
  | '/api-reference/components/handle'
  | '/api-reference/components/mini-map'
  | '/api-reference/components/panel'
  | '/api-reference/hooks'
  | '/api-reference/hooks/use-connection'
  | '/api-reference/hooks/use-edges'
  | '/api-reference/hooks/use-nodes'
  | '/api-reference/hooks/use-store'
  | '/api-reference/hooks/use-svelte-flow'
  | '/api-reference/hooks/use-update-node-internals'
  | '/api-reference/svelte-flow'
  | '/api-reference/svelte-flow-provider'
  | '/api-reference/types'
  | '/api-reference/types/background-variant'
  | '/api-reference/types/connection'
  | '/api-reference/types/connection-line-type'
  | '/api-reference/types/coordinate-extent'
  | '/api-reference/types/default-edge-options'
  | '/api-reference/types/edge'
  | '/api-reference/types/edge-marker'
  | '/api-reference/types/edge-props'
  | '/api-reference/types/fit-view-options'
  | '/api-reference/types/marker-type'
  | '/api-reference/types/node'
  | '/api-reference/types/node-props'
  | '/api-reference/types/panel-position'
  | '/api-reference/types/position'
  | '/api-reference/types/viewport'
  | '/examples'
  | '/examples/edges/custom-connectionline'
  | '/examples/edges/custom-edge'
  | '/examples/edges/edge-label-renderer'
  | '/examples/edges/edge-markers'
  | '/examples/edges/edge-types'
  | '/examples/edges/simple-floating-edges'
  | '/examples/interaction/context-menu'
  | '/examples/interaction/contextual-zoom'
  | '/examples/interaction/drag-and-drop'
  | '/examples/interaction/validation'
  | '/examples/layout/dagre'
  | '/examples/layout/elkjs'
  | '/examples/layout/horizontal-flow'
  | '/examples/layout/subflows'
  | '/examples/misc/download-image'
  | '/examples/misc/use-svelte-flow'
  | '/examples/nodes/add-node-on-edge-drop'
  | '/examples/nodes/connection-limit'
  | '/examples/nodes/custom-node'
  | '/examples/nodes/drag-handle'
  | '/examples/nodes/easy-connect'
  | '/examples/nodes/intersections'
  | '/examples/nodes/proximity-connect'
  | '/examples/nodes/stress'
  | '/examples/nodes/update-node'
  | '/examples/styling/base-style'
  | '/examples/styling/tailwind'
  | '/examples/styling/turbo-flow'
  | '/learn'
  | '/learn/getting-started/building-a-flow'
  | '/learn/getting-started/installation'
  | '/learn/guides/custom-nodes'
  | '/learn/guides/sub-flows'
  | '/learn/guides/theming'
  | '/showcase'
  | '/support-us';