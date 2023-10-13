import "../App.css";
import { useMediaQuery } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import GridViewIcon from "@mui/icons-material/GridView";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import FaceIcon from "@mui/icons-material/Face";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ApprovalIcon from "@mui/icons-material/Approval";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Dashboard = () => {
  const isFull = useMediaQuery("(min-width:900px)");
  return (
    <div style={{ margin: "0", color: "#f8f8ff" }}>
      <h6 className="p-2 ps-2">
        {isFull ? (
          <>
            <SettingsIcon /> Dashboard &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </>
        ) : (
          <SettingsIcon />
        )} 
       </h6>
      <h6 className="p-2 ps-2 h6 grey text-white">
        {isFull ? (
          <>
            <GridViewIcon /> Dashboard
          </>
        ) : (
          <GridViewIcon />
        )}
      </h6>

      <h6 className="p-2 ps-2 h6 grey text-white">
        {isFull ? (
          <>
            <ProductionQuantityLimitsIcon /> Product
          </>
        ) : (
          <ProductionQuantityLimitsIcon />
        )}
      </h6>
      <h6 className="p-2 ps-2 h6 grey text-white">
        {isFull ? (
          <>
            <FaceIcon /> Customer
          </>
        ) : (
          <FaceIcon />
        )}
      </h6>
      <h6 className="p-2 ps-2 h6 grey text-white">
        {isFull ? (
          <>
            <AttachMoneyIcon /> Income
          </>
        ) : (
          <AttachMoneyIcon />
        )}
      </h6>
      <h6 className="p-2 ps-2 h6 grey text-white">
        {isFull ? (
          <>
            <ApprovalIcon /> Promote
          </>
        ) : (
          <ApprovalIcon />
        )}
      </h6>
      <h6 className="p-2 ps-2 h6 grey text-white">
        {isFull ? (
          <>
            <SupportAgentIcon /> Help
          </>
        ) : (
          <SupportAgentIcon />
        )}
      </h6>
      <div
        className="h6"
        style={{
          position: "absolute",
          bottom: "40px",
          width: "11.22%",
          display: "flex",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {isFull ? (
          <>
            <span>
              <img
                style={{ height: "40px", borderRadius: "50%" }}
                src="/static/images/IMG_20230131_150407_785.jpg"
                alt="Profile Image"
             
              />
            </span>
            <div className="m-2">
              <p className="m-0 fw-b grey text-white">Kartik</p>
              <p className="m-0 grey text-white">Employee</p>
            </div>
          </>
        ) : (
          <img
            style={{ height: "22px", borderRadius: "50%" }}
            src="/static/images/IMG_20230131_150407_785.jpg"
            alt="Profile Image"
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
