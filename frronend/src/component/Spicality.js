import Navbar from "./Navbar";
function Spicality(){
    return(
        <>
        <Navbar/>

        <div class="banner3">
  <div class="py-5 banner" >
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-lg-5">
          <h3 class="my-3 text-white font-weight-medium text-uppercase">Book Appointment</h3>
          <div class="bg-white">
            <div class="form-row border-bottom">
              <div class="p-4 left border-right w-50">
              <div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
    Select the Doctors 
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Genral </a></li>
      <li><a class="dropdown-item" href="#">Link 2</a></li>
      <li><a class="dropdown-item" href="#">Link 3</a></li>
    </ul>
  </div>
              </div>
              <div class="p-4 right w-50">
                <label class="text-inverse font-12 text-uppercase">Last Name</label>
                <input type="text" class="border-0 p-0 font-14 form-control" placeholder="Your Last Name" />
              </div>
            </div>
            <div class="form-row border-bottom p-4">
              <label class="text-inverse font-12 text-uppercase">Email Address</label>
              <input type="text" class="border-0 p-0 font-14 form-control" placeholder="Enter your Email Address" />
            </div>
            <div class="form-row border-bottom p-4">
              <label class="text-inverse font-12 text-uppercase">Phone Number</label>
              <input type="text" class="border-0 p-0 font-14 form-control" placeholder="Enter your Phone Number" />
            </div>
            <div class="form-row border-bottom p-4 position-relative">
              <label class="text-inverse font-12 text-uppercase">Booking Date</label>
              <div class="input-group date">
                <input type="text" class="border-0 p-0 font-14 form-control" id="dp" placeholder="Select the Appointment Date" />
                <label class="mt-2" for="dp"><i class="icon-calendar mt-1"></i></label>
              </div>
            </div>
            <div class="form-row border-bottom p-4">
              <label class="text-inverse font-12 text-uppercase">Message</label>
              <textarea col="1" row="1" class="border-0 p-0 font-weight-light font-14 form-control" placeholder="Write Down the Message"></textarea>
            </div>
            <div>
              <button class="m-0 border-0 py-4 font-14 font-weight-medium btn btn-danger-gradiant btn-block position-relative rounded-0 text-center text-white text-uppercase">
									<span>Book Yor Appointment Now</span>
							</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
  </>
    )
}
export default Spicality;