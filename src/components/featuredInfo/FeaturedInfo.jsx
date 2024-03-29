import "./featuredinfo.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      {/* Revanue */}
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownwardOutlinedIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* Sales */}
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownwardOutlinedIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* Cost */}
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 2,415</span>
          <span className="featuredMoneyRate">
            +2.4
            <ArrowUpwardOutlinedIcon className="featuredIcon " />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
