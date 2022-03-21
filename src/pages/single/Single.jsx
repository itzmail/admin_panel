import "./single.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import TableTransaction from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Snowden</h1>
                <div className="detailItem">
                  <span className="itemKey">Email : </span>
                  <span className="itemValue">snowden1@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone : </span>
                  <span className="itemValue">+62 85465879987</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Addres : </span>
                  <span className="itemValue">Perum Graha Padalarang Indah</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country : </span>
                  <span className="itemValue">INA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={4/1} title={'User Spending (Last 6 months)'} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <TableTransaction />
        </div>
      </div>
    </div>
  )
}

export default Single;