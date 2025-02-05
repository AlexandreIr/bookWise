"use client";
import { toast } from "@/hooks/use-toast";
import config from "@/lib/config";
import ImageKit from "imagekit";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import Image from "next/image";
import { useRef, useState } from "react";

const {
  env: {
    apiEndpoint,
    imageKit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${apiEndpoint}/api/auth/imagekit`);
    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status: ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (filepath: string) => void;
}) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (error: any) => {
    console.log(error);
    toast({
      title: "Failed",
      description: "Image upload failed",
      variant: "destructive",
    });
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast({
      title: "Success",
      description: "Image uploaded successfully",
    });
  };
  const removeImage = () => {
    setFile(null);
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
      />
      <button
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();

          if (ikUploadRef.current) {
            //@ts-ignore
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a file</p>
        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>

      {file && (
        <div className="relative mt-4 w-[500px] h-[500px]">
          {" "}
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-red-400 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 transition"
          >
            ✕
          </button>
          <IKImage
            alt={file.filePath}
            path={file.filePath}
            width={500}
            height={300}
          />
        </div>
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
