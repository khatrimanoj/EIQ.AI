import React, {useState, useEffect} from 'react';

const ProductTicker = (props) => {
  const [csvData, setCsvData] = useState([]);

  const fetchCsv = async () => {
    return await fetch(
      "https://s3.ap-southeast-1.amazonaws.com/eiq.ai.tempcsv/Eiqai.ticker_new.csv"
    )
      .then((response) => {
        return response.text();
      })
      .then((res) => {
        data(res);
      });
    };
    
  useEffect(() => {
    fetchCsv();
  }, []);

  const data = (res) => {
    let data = res.split(/\r?\n/);
    let d1 = [];
    data.forEach((data) => {
      let obj = {};
      const val = data.split(",");
      d1.push({
        ...obj,
        name: val[0],
        value: parseFloat(val[1]).toFixed(2),
        color: val[2],
      });
    });
    setCsvData(d1);
  };

   
    const LoopList = () => {
      return (
        <>
          {csvData.map((e, i) => (
            <>
              {e.name !== "" &&
                e.name !== "undefined" &&
                e.value !== "" &&
                e.value !== "undefined" && (
                  <span
                    key={i}
                    className="inline-flex items-center text-1xl mx-4"
                  >
                    <span className="text-[clamp(0.813rem,1.5vw,0.935rem)] text-white pr-10px">
                      {e.name}
                    </span>
                    <div className="status-text flex items-center">
                      <span className={"status color-" + e.color}></span>
                      <span className="text-[clamp(0.813rem,1.5vw,0.935rem)] text-white">
                        {e.value}
                      </span>
                    </div>
                  </span>
                )}
            </>
          ))}
        </>
      );
    };

  return (
    <div className='absolute w-full'>
      <div className="marquee mx-auto w-full border-t-0 xl:border-t-1 relative flex overflow-x-hidden">
        <div className="py-2 animate-marquee whitespace-nowrap">
          <LoopList />
        </div>
        <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
          <LoopList />
        </div>
      </div>
    </div>
  );
}

export default ProductTicker;
