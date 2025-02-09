import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

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
      await axios.post("https://app-8vh4.onrender.com/upload", formData);
      toast.success("Convert chesi Dhobba mawa 😎");
      setDownloadUrl("https://app-8vh4.onrender.com/download");
    } catch (error) {
      toast.error("Error occhindhi Mawa!");
    }
  };

  return (
    <div 
      className="container"
      style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/agri.jpg)`, // Corrected image reference
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
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
