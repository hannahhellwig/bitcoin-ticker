import React from "react"
import { LineChart, Line, Tooltip, YAxis, XAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import openGdaxWebsocket from "../gdax-websocket"

class App extends React.Component {

  state = {
    tickerMessages: []
  }

  // if (tickerMessages.length > 10) {
  //   tickerMessages.length = 10
  // }

  componentDidMount() {
    this.websocket = openGdaxWebsocket("BTC-EUR", this.handleNewTickerMessage)
  }

  componentWillUnmount() {
    this.websocket.close()
  }

  handleNewTickerMessage = newTickerMessage => {
    this.setState(previousState => ({
      tickerMessages: previousState.tickerMessages.concat([newTickerMessage])
    }))
    if (tickerMessages.length > 10) {
      tickerMessages.length = 10
    }
  }

  render() {
    return (
      <div>
        <ResponsiveContainer width="100%" height={600}>
          <LineChart
            data={this.state.tickerMessages}
            margin={{ top: 20, right: 50, left: 50, bottom: 20 }} >
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" name="Price" stroke="#ce88c6" activeDot={{ stroke: "#8884d8", strokeWidth: 0, r: 5 }} />
            { /* <Line type="monotone" dataKey="high_24h" name="high 24h"stroke="#82ca9d" activeDot={{ stroke: "#ce88c6", strokeWidth: 2, r: 10 }} />
            <Line type="monotone" dataKey="low_24h" name="high 24h" stroke="#8884d8" /> */ }
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" />
            <YAxis type="number" domain={["dataMin", "dataMax"]} />
          </LineChart>
        </ResponsiveContainer>

      </div>
    )
  }

}

export default App

// {this.state.tickerMessages.map(msg => (
//   <div key={msg.sequence}>
//     {msg.time}: <strong>{msg.price} EUR</strong>
//   </div>
// ))}

// <YAxis type="number" domain={["dataMin", "dataMax"]} domain={[0, 20000]} padding={{ top: 20, bottom: 20 }} />

// http://recharts.org/en-US/examples
// https://jsfiddle.net/alidingling/xqjtetw0/
// const data = [
//   {name: "Page A", myNumber: 4000, pv: 2400, amt: 2400},
//   {name: "Page B", myNumber: 3000, pv: 1398, amt: 2210},
//   {name: "Page C", myNumber: 2000, pv: 9800, amt: 2290},
//   {name: "Page D", myNumber: 2780, pv: 3908, amt: 2000},
//   {name: "Page E", myNumber: 1890, pv: 4800, amt: 2181},
//   {name: "Page F", myNumber: 2390, pv: 3800, amt: 2500},
//   {name: "Page G", myNumber: 3490, pv: 4300, amt: 2100},
// ]

// best_ask:
// "5577"
// best_bid:
// "5576.99"
// high_24h:
// "5620.00000000"
// low_24h:
// "5570.00000000"
// open_24h:
// "5601.00000000"
// price:
// "5576.99000000"
// product_id:
// "BTC-EUR"
// sequence:
// 4636955515
// type:
// "ticker"
// volume_24h:
// "624.40593433"
// volume_30d:
// "24809.0902376"

// larger than 100 remove tickers
