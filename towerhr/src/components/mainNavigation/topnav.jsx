import classes from "./topnav.module.css";
import searchIcon from "../../assets/search.svg";
import reminderIcon from "../../assets/reminder.svg";
export default function Topnav() {
  return (
    <div className={classes.topNav}>

      <div className={classes.searchItem}>
        <div className={classes.search}>
          <img src={searchIcon} alt="search icon" />
          <small>Search For something</small>
        </div>
      </div>

      <div className={classes.userSection}>
        <div className={classes.reminderHolder}>
           <img src={reminderIcon} alt="reminder Icon" classes={classes.reminder} />
        </div>
        <div className={classes.userName}>
          <h4>Awsome Obed</h4>
          <small>Hr-Manager</small>
        </div>

        <div className={classes.imgHolder}>
          <img
            src="https://res.cloudinary.com/dvl2juial/image/upload/v1689066096/cld-sample-5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
