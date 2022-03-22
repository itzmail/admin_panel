import {useState} from 'react'
import "./new.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs, title}) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{display: "none"}} />
              </div>
              {inputs.map((value, key) => {
                return(
                  <div className="formInput" key={key}>
                    <label>{value.label}</label>
                    <input type={value.type} placeholder={value.placeholder} />
                  </div>
                )
              })}
              
            </form>
              <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;