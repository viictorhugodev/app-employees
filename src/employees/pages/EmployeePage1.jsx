import { useState } from "react";
import Dropzone from "react-dropzone";

export const EmployeePage1 = () => {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>
  setFileNames(acceptedFiles.map(file => file.name));
  return (
    <div className="App">
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Arrastre y suelte imágenes o haga clic para seleccionar archivos</p>
          </div>
        )}
      </Dropzone>
      <div>
        <strong>Archivos:</strong>
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
