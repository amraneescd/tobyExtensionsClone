import { create } from 'zustand'

type Mode = {
    mode: string;
    changeMode: (mode: string) => void;
}


export const useChangeMode = create<Mode>((set) => ({
    mode: 'light',
    changeMode: (mode) => {
        set({ mode: mode })
    }
}))
