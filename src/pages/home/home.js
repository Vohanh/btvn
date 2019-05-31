import React from 'react';
import '../../assets/css/main.css'
class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                { name: "Hanh" },
                { name: "Mai" },
                { name: "Nguyen" },
                { name: "Quyen" },
                { name: "Son" },
                { name: "Dung" },
                { name: "An" },
                { name: "Hoang" },
                { name: "Thuan" },
                { name: "Vinh" },
                { name: "Do" },
            ]
        }
        console.log(this.state.data)
    }
    render() {
        return (
            <React.Fragment>
                <div className="home-page-top">
                    <ul>
                        {
                            this.state.data.map((abcd, index) =>
                                <li>
                                    <span className="abc">Name:</span>
                                    <span className="abc1">{abcd.name}</span>
                                </li>
                            )}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default HomePage