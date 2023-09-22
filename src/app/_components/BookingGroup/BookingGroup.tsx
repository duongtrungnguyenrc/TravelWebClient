// Produced by Duong Trung Nguyen

import Tour from "@/app/_data/Tour";
import ServiceItem from "../ServiceItem/ServiceItem";
import "./styles.scss";

const BookingForm = () => {
  return (
    <>
      <section className="booking-group-site">
        <div className="booking-group-header">
            <h1 className="header-title">Booking Now</h1>
            <p className="header-sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet, </p>
        </div>
        <div className="booking-group-body">
            <div className="row">
                <div className="col-lg-8 bill-detail">
                    <h1 className="form-title">Billing Details</h1>
                    <form action="" method="get">
                        <div className="multi-group">
                        <div className="input-group">
                            <label>First Name</label>
                            <input type="first-name" name="firstName" placeholder="Input your First Name in Here" required/>
                        </div>
                        <div className="input-group">
                            <label>Last Name</label>
                            <input type="Last-name" name="LastName" placeholder="Input your Last Name in Here" required/>
                        </div>
                        </div>
                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="Input your Email Address in Here" required/>
                        </div>
                        <div className="input-group">
                            <label>Phone Number</label>
                            <input type="phone" name="phone" placeholder="Input your Phone Number in Here" required/>
                        </div>
                        <div className="input-group">
                            <label>Passport Number <span>(Optional)</span></label>
                            <input type="passport" name="passport" placeholder="Input your Passport Number in Here" required/>
                        </div>
                        <div className="input-group">
                            <label>Address</label>
                            <input type="address" name="address" placeholder="Input your Address in Here" required/>
                        </div>
                        <div className="input-group">
                            <label>Address</label>
                            <input type="address" name="address" placeholder="Input your Address in Here" required/>
                        </div>
                        <div className="input-group">
                            <label>Address</label>
                            <input type="address" name="address" placeholder="Input your Address in Here" required/>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <ServiceItem service={Tour}/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 bill-detail">
                    <h1 className="form-title">Extra Facilitation</h1>
                    <form action="" method="get">
                        <div className="check-group">
                            <input type="checkbox" name="email" required/>
                            <label>Airport Pickup</label>
                        </div>
                        <div className="check-group">
                            <input type="checkbox" name="phone" required/>
                            <label>Activity</label>
                        </div>
                        <div className="check-group">
                            <input type="checkbox" name="passport" required/>
                            <label>Massage and Spa</label>
                        </div>
                        <div className="input-group">
                            <label>Special Request</label>
                            <textarea name="" id="" cols={30} rows={10}>
                            Input your Special Request in Here
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-yellow btn-big">Continue to Payment</button>
                    </form>
                </div>
                <div className="col-lg-4">
                </div>
            </div>
        </div>
      </section>
    </>
  );
};
export default BookingForm;