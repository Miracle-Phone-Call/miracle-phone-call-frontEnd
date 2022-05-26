import { useContext } from "react";
import { Button } from "reactstrap";
import '../Component-Styling/search.css'
import Context from "../context/Context";


export default function ProfileCard ({data, viewProfile}) {

    const { setViewPerson } = useContext(Context)
    return (
        <div className="col-md-4 animated fadeIn" key={data.id}>
            <div className="card">
                <div className="card-body">
                <div className="avatar">
                    <img
                    src= "https://pixy.org/download/4770772/"
                    className="card-img-top"
                    alt=""
                    />
                </div>
                <h5 className="card-title">
                    {data.first_name.toUpperCase() + " " + data.last_name.toUpperCase()}
                </h5>
                <p className="card-text">
                    {data.username}
                </p>
                <Button className="profileButton" style={{backgroundColor: "#514de9"}} onClick={() => {
                    viewProfile(data.username);
                    setViewPerson(data);
                }}>
                        View Profile
                </Button>
                </div>
            </div>
        </div>
    )
}