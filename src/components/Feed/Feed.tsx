import { BsWifi } from "react-icons/bs";
import { postService } from "@domain";
import { AdsBox, Pagination } from "@components";
import { CardMedium } from "../Card/CardMedium";

async function fetchData(page: number, search: string | undefined) {
  const response = await postService.getFeed(page, search);
  return response;
}

export async function Feed({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const {
    data: posts,
    meta: { currentPage, hasNextPage, hasPreviousPage, totalPage },
  } = await fetchData(page, search);

  return (
    <div className="w-full lg:w-3/4">
      <div className="mb-4">
        <h4 className="flex items-center justify-center font-semibold text-xl lg:justify-normal">
          Notícias recentes
          <span className="text-red-600 ml-2 text-xl">
            <BsWifi />
          </span>
        </h4>
      </div>

      <div className="w-full">
        {posts.map((post, index) => {
          return <CardMedium post={post} key={index} />;
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        totalPage={totalPage}
        currentUrl={""}
      />
    </div>
  );
}

{
  /* {index == 2 && <AdsBox />}
              {index >= 5 && index % 2 != 0 && <AdsBox />} */
}
