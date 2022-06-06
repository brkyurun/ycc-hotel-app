function ReservationDetails() {
  return (
    <section className="reservation-details">
      <div className="top-text">
        <p className="hotel-name">Bosphorus Hotel</p>
        <p className="hotel-location">(İstanbul)</p>
      </div>
      <div className="bottom-text">
        <p>
          Giriş Tarihi: <span>25.05.2022 - </span>{" "}
        </p>
        <p>
          Çıkış Tarihi: <span>02.06.2022 - </span>{" "}
        </p>
        <p>
          Yetişkin: <span>2 - </span>{" "}
        </p>
        <p>
          Çocuk: <span>0</span>{" "}
        </p>
      </div>
    </section>
  );
}

export default ReservationDetails;
