
export interface UserIfc {
  displayName: string;
  id: number;
}

export interface CommentIfc {
  createdAt: string
  deletedA?: string
  id: number
  ownerId: number
  parentCommentId?: number
  txt: string
}
