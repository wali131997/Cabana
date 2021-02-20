import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
export default class PAMMtable extends Component {
  // states
  constructor(props) {
    super(props);
    this.  state = {
      managerCheck: true,
      sort: "",
      tableData: [
        {
          ranking: "Ranking",
          nickName: "Nickname",
          performence: "Performence",
          followers: "Followers",
          daysOpend: "daysOpend",
          managedFund: "ManagedFund",
        },
        {
          ranking: "Ranking",
          nickName: "Nickname",
          performence: "Performence",
          followers: "Followers",
          daysOpend: "daysOpend",
          managedFund: "ManagedFund",
        },
        {
          ranking: "Ranking",
          nickName: "Nickname",
          performence: "Performence",
          followers: "Followers",
          daysOpend: "daysOpend",
          managedFund: "ManagedFund",
        },
        {
          ranking: "Ranking",
          nickName: "Nickname",
          performence: "Performence",
          followers: "Followers",
          daysOpend: "daysOpend",
          managedFund: "ManagedFund",
        },
        {
          ranking: "Ranking",
          nickName: "Nickname",
          performence: "Performence",
          followers: "Followers",
          daysOpend: "daysOpend",
          managedFund: "ManagedFund",
        },
        {
          ranking: "Ranking",
          nickName: "Nickname",
          performence: "Performence",
          followers: "Followers",
          daysOpend: "daysOpend",
          managedFund: "ManagedFund",
        },
        {
          ranking: "Ranking",
          nickName: "Nickname",
          performence: "Performence",
          followers: "Followers",
          daysOpend: "daysOpend",
          managedFund: "ManagedFund",
        },
        {
          ranking: "Ranking",
          nickName: "Nickname",
          performence: "Performence",
          followers: "Followers",
          daysOpend: "daysOpend",
          managedFund: "ManagedFund",
        },
        {
          ranking: "Ranking",
          nickName: "Nickname",
          performence: "Performence",
          followers: "Followers",
          daysOpend: "daysOpend",
          managedFund: "ManagedFund",
        },
      ],
    };
  }
  

  // Handle manager check change fun
  handleChangeManagerCheck  () {
    this.setState({
      managerCheck: !this.state.managerCheck,
    });
  };

  //   handle Sort change fun
  handleSortChange  (e) {
    this.setState({
      sort: e.target.value,
    });
  };

  //   render Main
  render() {
    return (
      <div>
        <div className="greyBg pammTableRow">
          <div className="pammTableWrapper">
            <div className="pammTableHeader">
              <div className="d-flex alignItemCenter">
                <h5 className="missionTitle">TOP PAMM MANAGER ONLY</h5>
                <label className="switch ml-2">
                  <input
                    type="checkbox"
                    defaultChecked={this.state.managerCheck}
                  />
                  <span className="slider round" />
                </label>
              </div>
              <div className="d-flex">
                <FormControl placeholder="Search" style={{ width: "150px" }} />
                <button className="btn btn-outline">
                  <FontAwesomeIcon
                    icon={faSearch}
                    size="sm"
                    color="#000"
                  ></FontAwesomeIcon>
                </button>
                <FormControl
                  as="select"
                  className="ml-1 pammSortSelect"
                  id="inlineFormCustomSelect"
                  custom
                  onChange={this.handleSortChange}
                >
                  <option value="">Sort</option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </FormControl>
              </div>
            </div>
            <div className="pammTableContent">
              <table className="table pammTable ">
                <thead>
                  <tr>
                    <th>Ranking</th>
                    <th>Nickname</th>
                    <th>Performence</th>
                    <th>daysOpend</th>
                    <th>Followers</th>
                    <th>Managed Fund</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData &&
                    this.state.tableData.map((item) => {
                      return (
                        <tr>
                          <td>{item.ranking}</td>
                          <td>{item.nickName}</td>
                          <td>{item.performence}</td>
                          <td>{item.daysOpend}</td>
                          <td>{item.followers}</td>
                          <td>{item.managedFund}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
