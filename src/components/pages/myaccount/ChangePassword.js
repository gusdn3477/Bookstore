import { useHistory } from "react-router";

export default function ChangePassword(){

    const gogo = useHistory();
    const deleteUser = () => {
        fetch(`/user-service/users/${localStorage.getItem('userId')}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).
        then(
            alert("탈퇴 성공!"),
            localStorage.clear(),
            gogo.push('/')
        )
    }

    return(
        <div className="card-body">
        <div className="myaccount-info-wrapper">
            <div className="account-info-wrapper">
                <h4>Change Password</h4>
                <h5>Your Password</h5>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="billing-info">
                        <label>Password</label>
                        <input type="password"/>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="billing-info">
                        <label>Password Confirm</label>
                        <input type="password"/>
                    </div>
                </div>
            </div>
            <div className="billing-back-btn">
                <div className="billing-btn">
                    <button type="submit" style={{marginRight:"10px"}}>Continue</button>
                    <button type="submit" onClick={deleteUser}>회원탈퇴</button>
                </div>
            </div>
        </div>
    </div>
    );

}