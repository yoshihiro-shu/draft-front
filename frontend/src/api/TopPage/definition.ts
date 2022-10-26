class Category {
  id: number
  name: string
  description: string
  parentId: number
  createdAt: Date

  public constructor (id: number, name: string, description: string, parentId: number, createdAt: Date) {
    this.id = id
    this.name = name
    this.description = description
    this.parentId = parentId
    this.createdAt = createdAt
  }
}

class Tag {
  id: number
  name: string
  description: string
  createdAt: Date

  public constructor (id: number, name: string, description: string, createdAt: Date) {
    this.id = id
    this.name = name
    this.description = description
    this.createdAt = createdAt
  }
}

export default class Article {
  id: number
  userId: number
  thumbnailUrl: string
  title: string
  content: string
  status: number
  createdAt: Date
  updatedAt: Date
  categoryId: number
  Category: Category
  Tags: Tag[]

  public constructor (id: number, userId: number, thumbnailUrl: string, title: string, content: string, status: number, createdAt: Date, updatedAt: Date, categoryId: number, Category: Category, Tags: Tag[]) {
    this.id = id
    this.userId = userId
    this.thumbnailUrl = thumbnailUrl
    this.title = title
    this.content = content
    this.status = status
    this.categoryId = categoryId
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.Category = Category
    this.Tags = Tags
  }
}
