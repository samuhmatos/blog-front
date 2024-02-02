export interface PostCommentReportParamsApi {
  post_id: number;
  message: string;
  comment_id: number;
}

export interface PostCommentReportParams {
  postId: number;
  message: string;
  commentId: number;
}

export type ReportStatus = "OPEN" | "REJECTED" | "APPROVED";

export interface PostCommentReportApi {
  comment_id: number;
  user_id: number;
  message: string;
  id: number;
  created_at: string;
  updated_at: string;
  status: ReportStatus;
}

export interface PostCommentReport {
  id: number;
  commentId: number;
  userId: number;
  message: string;
  created_at: string;
  status: ReportStatus;
}

export interface UpdatePostCommentReportParams {
  id: number;
  status: ReportStatus;
}
