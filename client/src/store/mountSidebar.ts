import { create } from 'zustand';

interface MountSidebarState {
  isMounted: boolean;

  // actions
  mount: () => void;
  unmount: () => void;
  toggle: () => void;
}

export const useMountSidebar = create<MountSidebarState>((set) => ({
  // initial state
  isMounted: false,

  // set true
  mount: () => set({ isMounted: true }),

  // set false
  unmount: () => set({ isMounted: false }),

  // toggle state
  toggle: () =>
    set((state) => ({
      isMounted: !state.isMounted,
    })),
}));