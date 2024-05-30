export type Tabs = {
    tabName: string
    tabIndex: number,
    tabIcon: string
    tabLink: string
}
export type Collection = {
    collectionName: string
    collectionIndex: number
    tabs: Tabs[]
}