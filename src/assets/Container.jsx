import PropTypes from "prop-types";
const Container = (props) => {
  const { title, count, description1, description2, color, img } = props.data;
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          borderRadius: "10px",
          background: "white",
        }}
      >
        <span>
          <img
            style={{ height: "100px", borderRadius: "50%" }}
            src={img}
            alt="Profile Image"
          />
        </span>
        <div>
          <p className="m-0 fw-light" style = {{color:
            '#808080' }}>{title}</p>
          <h4 className="m-0 fw-bolder">{count}</h4>
          <p className="m-0 fw-light">
            <span style={{ color: `${color}` }}>{description1}</span>{" "}
            {description2}
          </p>
        </div>
      </div>
    </>
  );
};
Container.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
    description1: PropTypes.string.isRequired,
    description2: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
export default Container;
