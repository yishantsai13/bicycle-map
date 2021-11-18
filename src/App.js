import './App.css';
import CitySelect from './components/CitySelect'

function App() {
  return (
    <div className="bg-primary-lighter flex">
      {/* sidebar */}
      <div className="w-1/4 bg-primary-light p-10">
        {/* logo */}
        <div className="logo text-primary flex">
          <div>taiwan</div>
          <div>bicycle</div>
        </div>
        {/* search */}
        <div className="mt-14 text-primary">
          <span className="text-sm">這次想去哪裡玩</span>
          <CitySelect></CitySelect>
        </div>
      </div>
      {/* content */}
      <div className="p-10">
        {/* top */}
        <div className="w-max flex">
          {/* actions */}
          <div className="bg-primary text-white border-primary border rounded-l px-8 py-3 cursor-pointer">列表</div>
          <div className="border-primary border rounded-right rounded-r px-8 py-3 text-primary cursor-pointer">地圖</div>
        </div>
        {/* list */}
        <div className="flex flex-col">
          {/* list-item */}
          <div className="flex py-6 px-7">
            <div className="bg-gray-img rounded" style={{ width: '243px', height: '182px' }}>路線地圖簡圖或風景</div>
            <div className="ml-8">
              <h2 className="text-gray-text text-lg">自行車路線的名字</h2>
              <div className="text-gray-border text-lg mt-2">自行車路線距離</div>
              <div className="flex flex-col text-sm text-secondary mt-4">
                <div className="flex mb-3">
                  <span className="mr-2">起點</span>
                  <span>我家</span>
                </div>
                <div className="flex mb-3">
                  <span className="mr-2">迄點</span>
                  <span>你家</span>
                </div>
                <div className="flex mb-3">
                  <span className="mr-2">方向</span>
                  <span className="flex-auto">路上</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
