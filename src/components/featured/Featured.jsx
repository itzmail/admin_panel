import "./featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    return(
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5 } />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="desc">Previos transactions processing. Last payments may not be included</p>
                <div className="summary">
                    <div className="item">
                        <p className="itemTitle">Target</p>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <p className="itemTitle">Last week</p>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <p className="itemTitle">Last month</p>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;