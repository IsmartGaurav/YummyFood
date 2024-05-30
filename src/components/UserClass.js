import React from "react";
import UserContext from "../utils/UseContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>This is Contact Us Page 2 </h2>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              <h1>{loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}
export default UserClass;
