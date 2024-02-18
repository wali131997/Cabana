import React, { Component } from "react";
import $ from 'jquery';
export default class TradingCurrenciesDataTable extends Component {

  componentDidMount() {
    const tableData = [
      {
        symbol: "AUDCAD",
        type: "FOREX MINER",
        pipValue: "10",
        standardValue: "100000",
        limit: "10",
        digit: "5",
      },
      {
        symbol: "AUDCAD",
        type: "FOREX MINER",
        pipValue: "10",
        standardValue: "100000",
        limit: "10",
        digit: "5",
      },
      {
        symbol: "AUDCAD",
        type: "FOREX MINER",
        pipValue: "10",
        standardValue: "100000",
        limit: "10",
        digit: "5",
      },
    ];
    
    // window.$("#myTable").DataTable({
    //   data: tableData,
    //   columns: [
    //     { data: "symbol" },
    //     { data: "type" },
    //     { data: "pipValue" },
    //     { data: "standardValue" },
    //     { data: "limit" },
    //     { data: "digit" },
    //   ],
    //   responsive: true,
    // });
  }
  
  render() {
    return (
      <div className="basicRow">
        <div className="table-responsive">
          <table id="myTable" className="display dataTableRes" cellSpacing={0}>
            <thead>
              <tr>
                <th>SYMBOL</th>
                <th>TYPE</th>
                <th>PIP value (1 STANDARD LOT)</th>
                <th>STANDARD LOT SIZE</th>
                <th>LIMIT & STOP LEVELS</th>
                <th>DIGITS</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
