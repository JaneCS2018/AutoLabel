import React, { useState } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

import "./Upload.scss";

function UploadInput() {
  const [file, setFile] = useState(null);

  const fileHandler = e => {
    let fileObj = e.target.files[0];
    console.log(fileObj);

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        setFile({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });
  };

  return (
    <div className="App">
      <input type="file" onChange={fileHandler} />
      {file && (
        <OutTable
          data={file.rows}
          columns={file.cols}
          tableClassName="table"
          tableHeaderRowClass="heading"
        />
      )}
    </div>
  );
}
export default UploadInput