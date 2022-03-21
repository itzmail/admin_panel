import "./new.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="itzmail" />
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder="Ismail Alam" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="itzmail@imaco.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+62 1234 5678 9101" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Perumahan rumah-rumah Blok b 11 no 12" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="INA" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;