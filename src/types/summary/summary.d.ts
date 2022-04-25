
export type SummaryType = "BOOK_SUMMARY" | "CHAPTER_SUMMARY" | "ARTICLE_SUMMARY";

export declare interface LM_Summary {
    summary_id: string;
    summary: string;
    summaryType: SummaryType;
    book_id: string;
    chapter_id: string | null;
    article_id: string | null;
}
