"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";

interface Props {
  data: string;
}
export function ReadOnlyEditor({ data }: Props) {
  return (
    <CKEditor
      editor={Editor.Editor}
      data={data}
      onReady={(editor) => {
        editor.enableReadOnlyMode(`read-post`);
        const toolbarElement = editor.ui.view.toolbar.element;
        editor.ui.getEditableElement()!.style.border = "none";
        toolbarElement!.style.display = "none";
      }}
    />
  );
}
