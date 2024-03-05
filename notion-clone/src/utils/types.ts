export type NodeType = "text" | "image" | "list" | "page" | "heading1" | "heading2" | "heading3"

export type NodeDate = {
    id: string
    type: NodeType
    value: string
}

export type Page = {
    id: string
    slug: string
    title: string
    nodes: []
    cover: string
}