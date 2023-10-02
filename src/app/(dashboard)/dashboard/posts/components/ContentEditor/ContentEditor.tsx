"use client";import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { FormLayout } from "@components";
import { getCookie } from "cookies-next";
import { api } from "@api";
import { useEffect, useRef, useState } from "react";

export interface CommentEditorProps {
  onChange: (val: string) => void;
  errorMessage?: string;
  label?: string;
  isDirty: boolean;
  initialData?: string;
  isSubmitted: boolean;
}

export function ContentEditor({
  onChange,
  errorMessage,
  label,
  initialData = "",
  isDirty,
  isSubmitted,
}: CommentEditorProps) {
  const [data, setData] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const ref = useRef<CKEditor<ClassicEditor.ClassicEditor>>(null);
  const ckCustomEditor = Editor.Editor;

  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    if (ref.current) {
      if (!isDirty && data !== "" && isSubmitted) {
        ref.current.editor?.data.set("");
      }

      if (data.length) {
        onChange(data);
      }
    }
  }, [data, isDirty]);

  return (
    <FormLayout errorMessage={error} label={label} name="createPost">
      <div id="createPost" className={errorMessage && "border border-red-700"}>
        <CKEditor
          editor={ckCustomEditor}
          data={initialData}
          ref={ref}
          config={{
            image: { upload: { types: ["png", "jpeg", "gif", "jpg", "webp"] } },
            ui: {
              poweredBy: {
                label: null,
                position: "border",
                side: "right",
                verticalOffset: 5,
                horizontalOffset: 5,
              },
            },
          }}
          onReady={(editor) => {
            if (data)
              editor.plugins.get("FileRepository").createUploadAdapter =
                function (loader) {
                  return {
                    upload: async function () {
                      return loader.file.then((file) => {
                        var form = new FormData();
                        form.append("file", file);
                        return api
                          .post<{ url: string }>("post/upload-content", form, {
                            headers: {
                              "Content-Type": "multipart/form-data",
                              Authorization: `Bearer ${getCookie("token")}`,
                            },
                          })
                          .then((res) => {
                            var imageUrl = res.data.url;

                            return {
                              default: imageUrl,
                              html: editor.getData(),
                              getMediaWidget: function () {
                                var img = new Image();
                                img.src = imageUrl;
                                return img;
                              },
                            };
                          })
                          .catch((error) => {
                            throw new Error(
                              `Unable to upload file: ${error.message}`
                            );
                          });
                      });
                    },
                  };
                };
          }}
          onChange={(event, editor) => {
            let onChangeData = editor.getData();
            setData(onChangeData);
          }}
        />
      </div>
    </FormLayout>
  );
}

//TODO: AUTO SAVE
//TODO: WORD COUNT
// TODO: BALLON TOLL BAR
