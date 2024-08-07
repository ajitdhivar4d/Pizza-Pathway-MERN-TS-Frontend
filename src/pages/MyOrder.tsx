import Navbar from "../components/Navbar";

const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPfCnG51iZgO-2KtE8Psyn2W2g0wTzgWJxA&s";
const img2 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pizza_im_Pizzaofen_von_Maurizio.jpg/544px-Pizza_im_Pizzaofen_von_Maurizio.jpg";

const MyOrder = () => {
  return (
    <div className="myOrder-container">
      <Navbar />

      <div className="myOrder">
        <p>Date - 26 march 2023</p>
        <hr />
        <section>
          <div className="myOrder-item">
            <img src={img1} alt="image" />
            <h3>Pizza </h3>
            <span>$250</span>
          </div>
          <div className="myOrder-item">
            <img src={img2} alt="image" />
            <h3>Pizza </h3>
            <span>$250</span>
          </div>
        </section>
      </div>
      <div className="myOrder">
        <p>Date - 26 march 2023</p>
        <hr />
        <section>
          <div className="myOrder-item">
            <img src={img1} alt="image" />
            <h3>Pizza </h3>
            <span>$250</span>
          </div>
          <div className="myOrder-item">
            <img src={img2} alt="image" />
            <h3>Pizza </h3>
            <span>$250</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyOrder;
