import React from "react";
import { connect } from "react-redux";
import { getTrades, deleteTrade } from "../redux/actions/tradeAction";
import Trade from "../components/portfolio/Trade";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

class Portfolio extends React.Component {
  state = {
    openTrade: false,
  }

  componentDidMount() {
    this.props.getTrades();
  }

  handleClickOpenTrade = () => {
    this.setState({ openTrade: true });
  };

  closeDialog = () => {
    this.setState({
      openTrade: false,
    });
  };

  render() {
    const { tradeData } = this.props;
    return (
      <div style={{height: "93vh", overflowY: "auto"}}>
        <h1>My Portfolio</h1>
        <Button
          color="inherit"
          onClick={this.handleClickOpenTrade}
          // component={Link} to="/login"
        >
            Trade
        </Button>
        <Dialog
          open={this.state.openTrade}
          onClose={this.closeDialog}
          aria-labelledby="form-dialog-title"
        >
          <Trade onSubmit={this.closeDialog} />
        </Dialog>
        {tradeData === undefined
          ? ""
          : tradeData.map(data => (
              <div key={data.id}>
                <div>id: {data.id}</div>
                <div>Symbol: {data.symbol}</div>
                <div>Company: {data.company}</div>
                <div>Transaction: {data.transaction}</div>
                <div>Cash: {data.cashOnHand}</div>
                <div>Quantity: {data.quantity}</div>
                <div>Price: {data.price}</div>
                <div>Done at: {data.created_at}</div>
                <div>Owner: {data.owner}</div>
                <button onClick={this.props.deleteTrade.bind(this, data.id)}>
                  Delete
                </button>
              </div>
            ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tradeData: state.tradeReducer.tradeData
  };
};

const mapDispatchToProps = {
  getTrades,
  deleteTrade
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);