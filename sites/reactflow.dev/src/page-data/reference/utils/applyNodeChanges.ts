import { type PropsTableProps } from 'xy-ui';

export const signature: PropsTableProps = {
  props: [
    { name: 'Params' },
    { name: 'changes', type: 'NodeChange[]' },
    { name: 'nodes', type: 'Node[]' },
    { name: 'Returns' },
    { name: '', type: 'Node[]' },
  ],
};
