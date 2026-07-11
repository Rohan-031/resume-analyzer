import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export default function ResumeUploader() {

    const onDrop = useCallback(async (acceptedFiles) => {

        const formData = new FormData();

        formData.append(
            "file",
            acceptedFiles[0]
        );

        const response = await axios.post(
            "http://127.0.0.1:8000/upload",
            formData
        );

        alert(response.data.message);

    }, []);

    const { getRootProps, getInputProps } = useDropzone({

        accept: {
            "application/pdf": [".pdf"]
        },

        maxFiles: 1

    });

    return (

        <div
            {...getRootProps()}
            className="border-2 border-dashed rounded-xl p-10 cursor-pointer text-center"
        >

            <input {...getInputProps()} />

            <p>

                Drag & Drop Resume Here

            </p>

            <p>

                or Click to Upload

            </p>

        </div>

    );
}