export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user", headerName: "User", width: 230, renderCell: params => {
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: params => {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://randomuser.me/api/portraits/men/62.jpg",
        email: "1snow@gmail.com",
        status: "active",
        age: 35
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://randomuser.me/api/portraits/women/46.jpg",
        email: "2snow@gmail.com",
        status: "passive",
        age: 42
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://randomuser.me/api/portraits/women/57.jpg",
        email: "3snow@gmail.com",
        status: "active",
        age: 30
    },
    {
        id: 4,
        username: "Jacob Standford",
        img: "https://randomuser.me/api/portraits/men/61.jpg",
        email: "4snow@gmail.com",
        status: "passive",
        age: 30
    },
    {
        id: 5,
        username: "Larisa Rochefort",
        img: "https://randomuser.me/api/portraits/women/85.jpg",
        email: "5snow@gmail.com",
        status: "pending",
        age: 30
    },
    {
        id: 6,
        username: "Mike Lewandowski",
        img: "https://randomuser.me/api/portraits/men/35.jpg",
        email: "6snow@gmail.com",
        status: "pending",
        age: 30
    },
    {
        id: 7,
        username: "Helmuth Walter",
        img: "https://randomuser.me/api/portraits/men/11.jpg",
        email: "7snow@gmail.com",
        status: "active",
        age: 30
    },
]