import calendar from "./calendar.png";

function DateSelection() {
  return (
    <section className="date-selection">
      <form>
        <div className="date-inputs-container">
          <div className="boarding-container">
            <label htmlFor="boarding-date">Giriş Tarihi</label>
            <input type="date" name="boarding-date" id="boarding-date" />
          </div>
          <img src={calendar} alt="" />
          <div className="departure-container">
            <label htmlFor="departure-date">Çıkış Tarihi</label>
            <input type="date" name="departure-date" id="departure-date" />
          </div>
        </div>
        <div className="people-container">
          <div className="adults">
            <label htmlFor="adult-number">Yetişkin Sayısı</label>
            <input
              type="number"
              name="adult-number"
              id="adult-number"
              min="0"
              max="5"
            />
          </div>
          <div className="children">
            <label htmlFor="child-number">Çocuk Sayısı</label>
            <input type="number" name="child-number" id="child-number" />
          </div>
        </div>
      </form>
    </section>
  );
}

export default DateSelection;
