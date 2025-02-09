// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const [file1, setFile1] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [downloadUrl, setDownloadUrl] = useState("");

//   const handleUpload = async () => {
//     if (!file1 || !file2) {
//       toast.error("Rendu files upload cheyy Mawa!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file1", file1);
//     formData.append("file2", file2);

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/upload", formData);
//       toast.success(response.data.message);
//       setDownloadUrl("http://127.0.0.1:5000/download");
//     } catch (error) {
//       toast.error("Error occhindhi Mawa!");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "50px", fontFamily: "Arial" }}>
//       <h1 style={{ color: "#365838" }}>Bhoomi Company Excel Conversion</h1>
      
//       <div>
//         <p>Pedha File Upload chey Mawa:</p>
//         <input type="file" onChange={(e) => setFile1(e.target.files[0])} />
//       </div>

//       <div style={{ marginTop: "20px" }}>
//         <p>Chinna File Upload chey Mawa:</p>
//         <input type="file" onChange={(e) => setFile2(e.target.files[0])} />
//       </div>

//       <button onClick={handleUpload} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#365838", color: "white", border: "none", cursor: "pointer" }}>
//         Convert
//       </button>

//       {downloadUrl && (
//         <div style={{ marginTop: "20px" }}>
//           <a href={downloadUrl} download>
//             <button onClick={() => toast.success("Download Aindhi ika mingey bro")} style={{ padding: "10px 20px", backgroundColor: "green", color: "white", border: "none", cursor: "pointer" }}>
//               Download
//             </button>
//           </a>
//         </div>
//       )}

//       <ToastContainer />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast, Slide } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css"; // Importing the CSS file

// function App() {
//   const [file1, setFile1] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [downloadUrl, setDownloadUrl] = useState("");

//   const handleUpload = async () => {
//     if (!file1 || !file2) {
//       toast.error("Rendu files upload cheyy Mawa!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file1", file1);
//     formData.append("file2", file2);

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/upload", formData);
//       toast.success(response.data.message);
//       setDownloadUrl("http://127.0.0.1:5000/download");
//     } catch (error) {
//       toast.error("Error occhindhi Mawa!");
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="heading">Bhoomi Company Excel Conversion</h1>

//       <div className="upload-container">
//         <div className="upload-section">
//           <p className="upload-text">Pedha File Upload chey Mawa:</p>
//           <input type="file" className="file-input" onChange={(e) => setFile1(e.target.files[0])} />
//         </div>

//         <div className="upload-section">
//           <p className="upload-text">Chinna File Upload chey Mawa:</p>
//           <input type="file" className="file-input" onChange={(e) => setFile2(e.target.files[0])} />
//         </div>
//       </div>

//       <button className="convert-button" onClick={handleUpload}>Convert</button>

//       {downloadUrl && (
//         <div className="download-section">
//           <a href={downloadUrl} download>
//             <button className="download-button" onClick={() => toast.success("Download Aindhi ika mingey bro")}>
//               Download
//             </button>
//           </a>
//         </div>
//       )}

//       <ToastContainer 
//         position="bottom-center"
//         autoClose={5000}
//         hideProgressBar
//         transition={Slide}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"; // Importing the CSS file

function App() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleUpload = async () => {
    if (!file1 || !file2) {
      toast.error("Rendu files upload cheyy Mawa!");
      return;
    }

    const formData = new FormData();
    formData.append("file1", file1);
    formData.append("file2", file2);

    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", formData);
      toast.success(`Convert chesi Dhobba mawa 😎`);
      setDownloadUrl("http://127.0.0.1:5000/download");
    } catch (error) {
      toast.error("Error occhindhi Mawa!");
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Bhoomi Company Excel Conversion</h1>

      <div className="upload-container">
        <div className="upload-section">
          <p className="upload-text">Pedha File Upload chey Mawa:</p>
          <input type="file" className="file-input" onChange={(e) => setFile1(e.target.files[0])} />
        </div>

        <div className="upload-section">
          <p className="upload-text">Chinna File Upload chey Mawa:</p>
          <input type="file" className="file-input" onChange={(e) => setFile2(e.target.files[0])} />
        </div>
      </div>

      <button className="convert-button" onClick={handleUpload}>Convert</button>

      {downloadUrl && (
        <div className="download-section">
          <a href={downloadUrl} download>
            <button 
              className="download-button"
              onClick={() => toast.success("🔥 Download Aindhi ika mingey bro 🙏 🔥", {
                style: { background: "#4CAF50", color: "#fff", fontSize: "1.2rem", fontWeight: "bold" }
              })}
            >
              Download
            </button>
          </a>
        </div>
      )}

      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        transition={Slide}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;



