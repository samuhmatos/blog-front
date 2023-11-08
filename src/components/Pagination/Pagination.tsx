"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { MetaDataPage } from "@api";

interface PaginationProps
  extends Pick<
    MetaDataPage,
    "totalPage" | "hasNextPage" | "hasPreviousPage" | "currentPage"
  > {
  currentUrl: string;
  className?: string;
}

export function Pagination({
  totalPage,
  hasNextPage,
  hasPreviousPage,
  currentPage,
  currentUrl,
  className,
}: PaginationProps) {
  const arr = Array(totalPage).fill(1);

  if (totalPage === 1) return null;

  return (
    <nav aria-label="Page navigation" className={className}>
      <ul className="flex items-center -space-x-px h-8 text-base justify-center lg:justify-start">
        <li>
          <Link
            href={`${currentUrl}?page=1`}
            className={`${
              !hasPreviousPage && "pointer-events-none"
            } flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-400`}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </Link>
        </li>
        {arr.map((_, index) => {
          var pageIndex = index + 1;

          return (
            <li
              key={pageIndex}
              aria-current={pageIndex == currentPage ? "page" : "false"}
            >
              <Link
                href={`${currentUrl}?page=${pageIndex}`}
                aria-disabled={pageIndex == currentPage}
                className={twMerge(
                  "z-10 flex items-center justify-center px-3 h-8 leading-tight border-gray-300",
                  pageIndex == currentPage
                    ? "bg-gray-700 text-gray-400"
                    : "text-gray-500 bg-white border hover:bg-gray-400 hover:text-gray-700"
                )}
              >
                {pageIndex}
              </Link>
            </li>
          );
        })}

        <li>
          <Link
            href={`${currentUrl}?page=${currentPage + 1}`}
            className={`${
              !hasNextPage && "pointer-events-none"
            } flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-400`}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
