import { PostWithDetails } from "@domain";import Editor from "ckeditor5-custom-build/build/ckeditor";

type TableDetailsType = Pick<
  PostWithDetails,
  "subTitle" | "content" | "category"
>;
import { CKEditor } from "@ckeditor/ckeditor5-react";

export function TableDetailsCollapsed({
  category,
  content,
  subTitle,
}: TableDetailsType) {
  return (
    <div>
      <ul className="flex flex-col gap-2 border-b border-b-gray-200">
        <li>
          <span className="font-semibold">Categoria: </span>
          {category.name}
        </li>
        <li>
          <span className="font-semibold">subTítulo: </span>
          {subTitle}
        </li>
        <li>
          <p className="text-center font-bold text-lg">Redação</p>
          <div>
            <CKEditor
              editor={Editor.Editor}
              data={content}
              onReady={(editor) => {
                editor.enableReadOnlyMode(`read-post`);
                const toolbarElement = editor.ui.view.toolbar.element;
                editor.ui.getEditableElement()!.style.border = "none";
                toolbarElement!.style.display = "none";
              }}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

/**
 * @subTitle
 * @content
 * @categoryName
 

* @autorName
 * @commentsCount
 */
