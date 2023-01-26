
export type Tcomments = {
  id: number;
  profile_url: string;
  author?: string;
  content: string;
  createdAt: string;
  title?: 'pending'
}
export type Tpage = {
  currentPage: number;
  prevPage: number | undefined,
  nextPage: number,
}

export type TmodalMode = {
  modalMode : 'modify' | 'delete';
}