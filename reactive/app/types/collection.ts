export type Tabs = {
    tabName: string;
    tabIndex: number
    tabIcon: string;
    tabLink: string;
}
export type Collection = {
    collectionName: string;
    collectionIndex: number;
    isStarredCollection: boolean;
    tabs: Tabs[];
}

export type Tab = {
    tabTitle: string;
    tabIcon: string;
    tabURL: string;
    closeTab: () => void;
    tabID?: number;
    draggingTab: () => void;
}