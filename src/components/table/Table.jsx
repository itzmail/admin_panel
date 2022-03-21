import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableTransaction = () => {
    const rows = [
        {
            id: 1143155,
            product: "Hp Omen 15",
            img: "https://images.idgesg.net/images/article/2017/06/hp_omen_17-laptop_left_rearquarter_jun_2017-100725000-orig.jpg",
            customer: "Steven Acep",
            date: "1 Sya'ban",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 1143155,
            product: "Playstation 5",
            img: "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/143354-games-feature-sony-playstation-5-release-date-rumours-and-everything-you-need-to-know-about-ps5-image1-cvz3adase9.jpg",
            customer: "Cecep Sudrajat",
            date: "1 Rajab",
            amount: 785,
            method: "Online Payments",
            status: "Pending"
        },
        {
            id: 1143155,
            product: "Steam Deck",
            img: "https://knowthisapp.com/wp-content/uploads/2021/08/everything-you-need-to-know-about-steam-deck.jpg",
            customer: "Uus Dahlia",
            date: "1 Rabbiul Awal",
            amount: 785,
            method: "Online Payments",
            status: "Pending"
        },
        {
            id: 1143155,
            product: "Iphone 13 pro max",
            img: "https://bgr.com/wp-content/uploads/2021/04/iphone-13-design-schematic-3d-leak-1.jpg",
            customer: "Entin Ningsih",
            date: "15 Syawal",
            amount: 785,
            method: "Cash",
            status: "Approved"
        },
    ]

    return(
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image"/>
              <TableCell className="tableCell">{row.product}</TableCell>
              </div>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default TableTransaction;