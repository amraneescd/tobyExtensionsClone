import { create } from 'zustand'

type Tab = {
    tabTitle: string;
    tabIcon: string;
    tabURL: string;
    tabID: number | null,
    setDraggedIcon: (newTabTitle?: string, newTabIcon?: string, newTabURL?: string, newTabID?: number | null) => void;
}


export const useSetDraggedTabData = create<Tab>((set) => ({
    tabTitle: '',
    tabIcon: '',
    tabURL: '',
    tabID: null,
    setDraggedIcon: (newTabTitle, newTabIcon, newTabURL, newTabID) => {
        set({ tabTitle: newTabTitle })
        set({ tabIcon: newTabIcon })
        set({ tabURL: newTabURL })
        set({ tabID: newTabID })
    }
}))
