import { useDropzone } from "react-dropzone";
import React, { useEffect, useState } from "react";
import { Image } from "react-bulma-components";
import "./FileUploader.css";

export default function FileUploader({ setFile }) {
  const [filePreview, setFilePreview] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDropAccepted: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      if (acceptedFiles[0].type.startsWith("image"))
        setFilePreview(URL.createObjectURL(acceptedFiles[0]));
      else 
        setFilePreview("https://cdn-icons-png.flaticon.com/512/4305/4305524.png");
    },
  });
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      URL.revokeObjectURL(filePreview);
    },
    [filePreview]
  );
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <p>Drag and drop or Click to select a File</p>
      <div>
        <Image
          fallback="https://cdn.icon-icons.com/icons2/3214/PNG/512/cloud_file_upload_server_icon_196427.png"
          src={filePreview}
        />
      </div>
    </div>
  );
}
