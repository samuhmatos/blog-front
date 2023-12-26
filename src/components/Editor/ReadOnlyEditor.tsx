"use client";import { useEffect, useState } from "react";

interface Props {
  data: string;
}

export default function ReadOnlyEditor({ data }: Props) {
  const [Component, setComponent] = useState<JSX.Element>();

  useEffect(() => {
    async function loadModule() {
      const { default: Editor } = await import("ckeditor5-custom-build");
      const { CKEditor } = await import("@ckeditor/ckeditor5-react");

      setComponent(
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
    void loadModule();
  }, [data]);

  return Component;
}
