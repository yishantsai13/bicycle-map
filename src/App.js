import './App.css';
import CitySelect from './components/CitySelect'
import { getCityPath } from './services/BikeData.js';
import React from 'react'
import bicycle_logo from './images/bicycle_logo.svg'
import table from './images/table.svg'
import map from './images/map.svg'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cyclePathList: []
    }
  }
  componentDidMount() {
    getCityPath({ city: "Keelung", limitNum: 3 }).then(
      (result) => {
        this.setState({
          cyclePathList: result
        })
      },
      (error) => {
        console.log(error);
      }
    )
  }
  render() {
    const pathList = this.state.cyclePathList
    const hasPathList = this.state.cyclePathList.length > 0

    const pathItems = pathList.map(item => {
      return (
        <div className="flex py-6 px-7" >
          <div className="bg-gray-img rounded" style={{ width: '243px', height: '162px' }}>
            <img src="https://images.unsplash.com/photo-1541584285245-c83a93cce0e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80" width="243px" height="182px" />
          </div>
          <div className="ml-8">
            <h2 className="text-gray-text text-lg">{item.RouteName}</h2>
            <div className="text-gray-border text-lg mt-2">{item.CyclingLength} 公里</div>
            <div className="flex flex-col text-sm text-secondary mt-4">
              <div className="flex mb-3">
                <span className="mr-2">起點</span>
                <span>{item.RoadSectionStart}</span>
              </div>
              <div className="flex mb-3">
                <span className="mr-2">迄點</span>
                <span>{item.RoadSectionEnd}</span>
              </div>
              {/* <div className="flex mb-3">
                <span className="mr-2">方向</span>
                <span className="flex-auto">路上</span>
              </div> */}
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="bg-primary-lighter flex" >
        {/* sidebar */}
        <div className="w-1/4 bg-primary-light p-10" >
          {/* logo */}
          <div div className="logo text-primary flex items-end" >
            <div>taiwan</div>
            <img src={bicycle_logo} />
            <div>bicycle</div>
          </div>
          {/* search */}
          <div div className="mt-14 text-primary" >
            <span className="text-sm mb-3">這次想去哪裡玩</span>
            <CitySelect></CitySelect>
          </div>
        </div>
        {/* content */}
        < div className="p-10" >
          {/* top */}
          <div className="w-max flex" >
            {/* actions */}
            <div className="bg-primary text-white border-primary border rounded-l px-8 py-3 cursor-pointer flex">
              <img src={table} className="mr-3" /> 列表</div>
            <div className="border-primary border rounded-right rounded-r px-8 py-3 text-primary cursor-pointer flex">
              <img src={map} className="mr-3" />地圖</div>
          </div>
          {/* list */}
          <div div className="flex flex-col" >
            {hasPathList && pathItems}
          </div>
        </div >
      </div >
    );
  }
}

export default App;
