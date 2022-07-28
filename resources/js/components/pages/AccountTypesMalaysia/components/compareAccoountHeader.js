import React, { Component } from "react";
import { connect } from "react-redux";

 class compareAccoountHeader extends Component {
  constructor() {
    super();
    // state
    this.state = {
      active: 's',
    };
  }

  // handle active fun
  handleActiveFusn  (type)  {
    console.log()
    this.setState({
      active: type,
    });
  };

  //   renderMain
  render() {
    const { active, handleActiveFun } = this.props;
    return (
      <div className="col-12">
        <div className=" row compareAccountTopHeader">
          <div
            className={
              this.props.account_type == 's'
                ? " col-4 standardAccountDiv standardAccountActive"
                : " col-4 standardAccountDiv"
            }
            onClick={() => this.props.changePromotions('s')}
          >
            <h3 className="compareAccountTitle mt-2 mt-sm-3">
              Standard Accounts
            </h3>
          </div>
          <div
            className={
                this.props.account_type == 't'
                ? " col-4 standardAccountDiv standardAccountActive"
                : " col-4 standardAccountDiv"
            }
            onClick={() => this.props.changePromotions('t')}
          >
            <h3 className="compareAccountTitle mt-2 mt-sm-3">Trader Accounts</h3>
          </div>
          <div
            className={
                this.props.account_type == 'b'
                ? " col-4 standardAccountDiv standardAccountActive"
                : " col-4 standardAccountDiv"
            }
            onClick={() => this.props.changePromotions('b')}
          >
            <h3 className="compareAccountTitle mt-2 mt-sm-3">Bonus Accounts</h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return{
        account_type:state.account_type
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changePromotions:(data)=>{dispatch({type:'CHANGE_ACCOUNT_TYPE',payload:data})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(compareAccoountHeader);
