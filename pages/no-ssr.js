import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./dashboard'), {
  ssr: false,
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => <DynamicComponentWithNoSSR />
