import { create } from 'zustand'

type Tab = {
    tabTitle: string;
    tabIcon: string;
    tabURL: string;
    setDraggedIcon: (newTabTitle?: string, newTabIcon?: string, newTabURL?: string) => void;
}


export const useSetDraggedTabData = create<Tab>((set) => ({
    tabTitle: '',
    tabIcon: '',
    tabURL: '',
    setDraggedIcon: (newTabTitle, newTabIcon, newTabURL) => {
        set({ tabTitle: newTabTitle })
        set({ tabIcon: newTabIcon })
        set({ tabURL: newTabURL })
    }
}))
