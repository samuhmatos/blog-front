"use client";
import { useEffect, useRef, useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic";
import { FormLayout } from "@components";
import { postService } from "@domain";
import { toastUtils } from "@utils";

import CkEditor from "ckeditor5-custom-build/build/ckeditor";

// @ts-ignore
// import ImageRemoveEventCallbackPlugin from "ckeditor5-image-remove-event-callback-plugin";

export interface CommentEditorProps {
  onChange: (val: string) => void;
  errorMessage?: string;
  label?: string;
  isDirty: boolean;
  initialData?: string;
  isSubmitted: boolean;
}

type StatisticsType = {
  words: number;
  characters: number;
};
export function Editor({
  onChange,
  errorMessage,
  label,
  initialData = "",
  isDirty,
  isSubmitted,
}: CommentEditorProps) {
  const [data, setData] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [statistics, setStatistics] = useState<StatisticsType>({
    words: 0,
    characters: 0,
  });

  const ref = useRef<CKEditor<ClassicEditor.ClassicEditor>>(null);

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
    <FormLayout
      errorMessage={error}
      label={label}
      name="createPost"
      bottomRightComponent={
        <div className="flex gap-3">
          <p>Words: {statistics.words}</p>
          <p>Characters: {statistics.characters}</p>
        </div>
      }
    >
      <div id="createPost" className={errorMessage && "border border-red-700"}>
        <CKEditor
          editor={CkEditor.Editor}
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
            wordCount: {
              onUpdate(data) {
                setStatistics({
                  words: data.words,
                  characters: data.characters,
                });
              },
            },
            balloonToolbar: ["bold", "italic", "|", "undo", "redo"],
            simpleUpload: {
              uploadUrl: "www.asdasd.com.br",
            },
            // extraPlugins: [ImageRemoveEventCallbackPlugin],
          }}
          onReady={(editor) => {
            editor.plugins.get("FileRepository").createUploadAdapter =
              function (loader) {
                return {
                  upload: async function () {
                    return loader.file.then((file) => {
                      var form = new FormData();
                      form.append("file", file!);
                      return postService
                        .uploadPostContent(form)
                        .then((res) => {
                          var imageUrl = res.url;
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
                          let msg = `Unable to upload file: ${error.message}`;
                          toastUtils.show({
                            message: msg,
                          });

                          throw msg;
                        });
                    });
                  },
                };
              };
          }}
          onChange={(event, editor) => {
            setData(editor.getData());
          }}
        />
      </div>
    </FormLayout>
  );
}
