import { create } from 'zustand'

type navBarTitle = {
    title: string;
    changeTitle: (newTitle: string) => void;
}


export const useChangeNavBarTitle = create<navBarTitle>((set) => ({
    title: 'My Collections',
    changeTitle: (newTitle) => {set({title: newTitle})}
}))