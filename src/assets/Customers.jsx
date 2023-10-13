import DrawChart from './DrawChart';
const Customers = () => {
    const data = [
        { value: 45 },
        { value: 35 },
        { value: 20 },
      ];
  return (
    <div
      style={{
        padding: "15px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "10px",
        marginTop: "20px",
              background: "white",
              height: '303px'
      }}
    >
      <div
        style={{
          padding: "2px",
        }}
      >
        <div>
          <h6 className="fw-bold">Customers</h6>
          <h6 className="fw-light" style={{ fontSize: "12px",color:
            '#808080'  }}>
            Customers that buy products
          </h6>
              </div>
              <div>
              <DrawChart data={data} />
              </div>
      </div>
    </div>
  );
};

export default Customers;
