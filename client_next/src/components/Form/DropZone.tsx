import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { Flex } from "@chakra-ui/react";
import Image from "next/image";

interface IFiles {
  path: string;
  name: string;
  lastModified: number;
  lastModifiedDate: Date;
  webkitRelativePath: string;
  preview: string;
}

export function Dropzone() {
  const [files, setFiles] = useState<IFiles[]>([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
      <Flex 
        p={10}
        border="1px dashed #38A169"
        borderRadius={8}
        textAlign="center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Solte os arquivos aqui ...</p> :
            <p>Arraste e solte alguns arquivos aqui ou clique para selecionar arquivos</p>
        }
      </Flex>
      <Flex>
        {files.map(f => {
          <Image src={f.preview} alt="Teste" />
        })}
      </Flex>
    </>
  )
}