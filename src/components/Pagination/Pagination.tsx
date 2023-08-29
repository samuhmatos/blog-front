"use client";
import Link from "next/link";
import { MetaDataPage } from "@api";
import { useRouter } from "next/navigation";

interface PaginationProps
  extends Pick<
    MetaDataPage,
    "totalPage" | "hasNextPage" | "hasPreviousPage" | "currentPage"
  > {
  currentUrl: string;
}

export function Pagination({
  totalPage,
  hasNextPage,
  hasPreviousPage,
  currentPage,
  currentUrl,
}: PaginationProps) {
  const arr = Array(totalPage).fill(undefined);
  const router = useRouter();

  if (totalPage === 1) return null;

  return (
    <nav aria-label="Page navigation">
      <ul className="flex items-center -space-x-px h-8 text-base justify-center lg:justify-start">
        <li>
          <Link
            href={`${currentUrl}?page=1`}
            className={`${
              !hasPreviousPage && "pointer-events-none"
            } flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </Link>
        </li>
        {arr.map((_, index) => {
          var pageIndex = index + 1;
          return (
            <li key={pageIndex}>
              <Link
                aria-current={pageIndex === currentPage ? "page" : "false"}
                href={`${currentUrl}?page=${pageIndex}`}
                className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
            } flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
