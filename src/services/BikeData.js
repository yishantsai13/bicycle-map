import jsSHA from "jssha";
function getAuthorizon() {
  const APPID = "f90c9da674534df398fca338c8aa34b8";
  const APPKEY = "XEg5uRI-uoeY6vXF0Xr3Udz-HNI";
  let GMTStr = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(APPKEY, "TEXT");
  ShaObj.update("x-date: " + GMTStr);

  let HMAC = ShaObj.getHMAC("B64");

  let authorization = `hmac username="${APPID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization: authorization, "X-Date": GMTStr };
}

function getCityPath(data = {}) {
  let url = ''
  let query = ['$format=JSON']
  if (data.hasOwnProperty('keyWord')) data.keyWord && query.push(`$filter=contains(RouteName,'${data.keyWord}')`)
  if (data.hasOwnProperty('limitNum')) query.push(`$top=${data.limitNum}`)
  let queryStr = query.join('&')
  url = `https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/${data.city}?${queryStr}`

  return fetch(
    url,
    {
      headers: getAuthorizon()
    }
  ).then((res) => res.json());
}

export {
  getCityPath
}