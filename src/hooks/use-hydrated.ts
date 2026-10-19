import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

// False while hydrating prerendered HTML (and on the server), true afterwards.
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}
