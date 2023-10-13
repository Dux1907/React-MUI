import {
  BarChart,
  Bar,
    ResponsiveContainer,
  XAxis
} from "recharts";

const Overview = () => {
   
  const data = [
    {
      name: "Jan",
      uv: 260,
    },
    {
      name: "Feb",
      uv: 174,
    },
    {
      name: "Mar",
      uv: 390,
    },
    {
      name: "Apr",
      uv: 278,
    },
    {
      name: "May",
      uv: 330,
    },
    {
      name: "Jun",
      uv: 130,
    },
    {
      name: "Jul",
      uv: 339,
      },
      {
        name: "Aug",
        uv: 400,
      },
      {
        name: "Sep",
        uv: 374,
      },
      {
        name: "Oct",
        uv: 303,
      },
      {
        name: "Nov",
        uv: 277,
      },
      {
        name: "Dec",
        uv: 313,
      },
  ];
  const coloredData = data.map((entry) => {
    if (entry.name == "Aug") {
      return { ...entry, fill: "#6034ec" };
    }
    return entry;
  });
  return (
    <div
      style={{
        padding: "15px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "10px",
              marginTop: "20px",
        background:'white'
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2px",
        }}
      >
        <div>
          <h6 className="fw-bold">Overview</h6>
          <h6 className="fw-light" style = {{fontSize:'12px',color:
            '#808080' }}>Monthly Earnings</h6>
        </div>
        <div>
          <select className="form-select" aria-label="Default select example" style = {{fontSize:'13px',color:
            '#808080' }}>
            <option value>Quarterly</option>
          </select>
          
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
              <BarChart data={coloredData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={15} />
                  <Bar dataKey="uv" fill="#e4e0ff" radius={[15, 15, 15, 15]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Overview;
