import { useState } from "react";
import{Link} from "react-router-dom";
export function MakerblePost(){

  const [active,setActive] = useState(false);

  function handleTaskFollowClick(){
    setActive(current=>!current);
    console.log(active);
  }
  return(
    <>
          <div id="main">
            {/* posting details section */}
          <div className="p-2">
            <div className="border rounded-3 p-2">
              <div className="d-flex">
                <img src="./resource/image/boy1.png" alt="" />
                <div>
                  <button className="btn fw-semibold"><i class="bi bi-camera-reels-fill text-danger"></i>&nbsp;Live Video</button>
                  <button className="btn fw-semibold"><i class="bi bi-image-fill text-success"></i>&nbsp;Photo/Video</button>
                </div>
              </div>
              <div className="mt-2">
                <textarea className="form-control" placeholder="Share your some Progress" name="" id="" cols="30" rows="5"></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary mt-3">Post</button>
              </div>
            </div>
            {/* Posted logs */}
            <div className="border rounded-3 p-2 mt-2">
              <div className="d-flex">
                <div>
                  <img src="./resource/image/boy1.png" alt="" />
                </div>
                <div className="ms-2">
                  <p className="text-primary fw-semibold">Tom HUNKS</p>
                  <p className="text-secondary">First posted at 15:29 on 11th Dec 2032 </p>
                  <p className="text-secondary">Last edited at 15:29 on 11th Dec 2032 </p>
                  <p className="btn rounded-pill bg-success bi bi-clipboard-fill">&nbsp;PHQ9</p>
                </div>
              </div>
              <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, perferendis.</p></div>
              <hr />
              <div className="d-flex justify-content-between">
                <img src="./resource/image/boy1.png" alt="" />
                <input type="text" className="rounded-4 form-control w-75" placeholder="Write a Comment..." />
                <button className="btn btn-primary">Post</button>
              </div>
            </div>
            <div className="border rounded-3 p-2 mt-2">
              <div className="d-flex">
                <div>
                  <img src="./resource/image/makerble_logo1.jpg" alt="" height="48px" width="48px" />
                </div>
                <div className="ms-2">
                  <p className="text-primary fw-semibold">Respondent</p>
                  <p className="text-secondary">First posted at 05:29 on 11th Dec 2023 </p>
                  <p className="text-secondary">Last edited at 05:29 on 11th Dec 2023 </p>
                  <p className="btn rounded-pill bg-info bi bi-clipboard-fill">&nbsp;Weekly Register</p>
                </div>
              </div>
              <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, perferendis.</p></div>
              <hr />
              <div className="d-flex justify-content-between">
                <img src="./resource/image/boy1.png" alt="" />
                <input type="text" className="rounded-4 form-control w-75" placeholder="Write a Comment..." />
                <button className="btn btn-primary">Post</button>
              </div>
            </div>
            <div className="border rounded-3 p-2 mt-2">
              <div className="d-flex">
                <div>
                  <img src="./resource/image/makerble_logo1.jpg" alt="" height="48px" width="48px" />
                </div>
                <div className="ms-2">
                  <p className="text-primary fw-semibold">Respondent</p>
                  <p className="text-secondary">First posted at 05:29 on 11th Dec 2023 </p>
                  <p className="text-secondary">Last edited at 05:29 on 11th Dec 2023 </p>
                  <p className="btn rounded-pill bg-info bi bi-clipboard-fill">&nbsp;Weekly Register</p>
                </div>
              </div>
              <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, perferendis.</p></div>
              <hr />
              <div className="d-flex justify-content-between">
                <img src="./resource/image/boy1.png" alt="" />
                <input type="text" className="rounded-4 form-control w-75" placeholder="Write a Comment..." />
                <button className="btn btn-primary">Post</button>
              </div>
            </div>
          </div>

          {/* part 2 main section */}
          {/* task block section */}
          <div className="p-2" id={active?"task-follow-block":"task-follow-none"}>
            <div className="border border-2 rounded-4 p-3">
              <div className="d-flex justify-content-between p-2">
                <h5 className="text-success">Tasks</h5>
                <div>
                  <div className="input-group">
                    <input className="btn border" value="25 To DO" type="text" size="5" />
                    <span className="btn bg-secondary">43 Done</span>
                  </div>
                </div>
                <button className="btn btn-info">Filtter</button>
              </div>
              <hr />
              <div className="d-flex justify-content-center input-group">
                <input type="text" className="border form-control-sm" />
                <button className="btn btn-danger text-white">Save Task</button>
              </div>
              {/* task  list */}
              <div>
                <div className="border border-primary d-flex justify-content-between p-2 mt-2">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span>
                    <input type="checkbox" />
                    <i className="bi bi-gear-fill text-primary ms-3"></i>
                  </span>
                </div>
                <div className="border border-danger d-flex justify-content-between p-2 mt-2">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span>
                    <input type="checkbox" />
                    <i className="bi bi-gear-fill text-primary ms-3"></i>
                  </span>
                </div><div className="border border-secondary d-flex justify-content-between p-2 mt-2">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span>
                    <input type="checkbox" />
                    <i className="bi bi-gear-fill text-primary ms-3"></i>
                  </span>
                </div><div className="border border-info d-flex justify-content-between p-2 mt-2">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span>
                    <input type="checkbox" />
                    <i className="bi bi-gear-fill text-primary ms-3"></i>
                  </span>
                </div><div className="border border-success d-flex justify-content-between p-2 mt-2">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span>
                    <input type="checkbox" />
                    <i className="bi bi-gear-fill text-primary ms-3"></i>
                  </span>
                </div>
              </div>
              {/* pages preview and Next */}
              <div className="d-flex justify-content-center mt-2 input-group border ">
                <button className="btn bi bi-arrow-left text-secondary">Previous</button>
                <button className="btn text-primary">Next<i className="bi bi-arrow-right"></i></button>
              </div>
            </div>

            {/* Personal Progress Section */}
            <div className="border border-2 rounded-4 mt-2 p-2">
              <div className="d-flex justify-content-between">
                <p className="fw-semibold">Personal Progress</p>
                <Link className="text-decoration-none">Go to board</Link>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-2 align-items-center">
                <div>
                  <img src="./resource/image/orange.jpg" alt="" height="50px" width="50px" />
                </div>
                <div className="w-75 text-center">
                  <p className="text-secondary">Are either of your parents livings?</p>
                  <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "20%" }}></div>
                  </div>
                </div>
                <div>
                  <span className="bi bi-file-plus-fill"></span>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2 align-items-center">
                <div>
                  <img src="./resource/image/blue.jpg" alt="" height="50px" width="50px" />
                </div>
                <div className="w-75 text-center">
                  <p className="text-secondary">Do you beiong to any groups in while</p>
                  <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: "40%" }}></div>
                  </div>
                </div>
                <div>
                  <span className="bi bi-file-plus-fill"></span>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2 align-items-center">
                <div>
                  <img src="./resource/image/pink.jpg" alt="" height="50px" width="50px" />
                </div>
                <div className="w-75 text-center">
                  <p className="text-secondary">1-2-1 Events</p>
                  <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div>
                  <span className="bi bi-file-plus-fill"></span>
                </div>
              </div>
              <div className="text-end">
                <Link className="text-decoration-none">Show All</Link>
              </div>
            </div>
            {/* Follwers List */}
            <div className="border border-2 rounded-4 p-2 mt-2">
                  <div className="text-primary fw-semibold">Follwers</div>
                  <hr />
                  <div className="d-flex justify-content-evenly">
                    <img src="./resource/image/boy2.png" alt="" />
                    <img src="./resource/image/girl2.png" alt="" />
                    <img src="./resource/image/boy1.png" alt="" />
                    <img src="./resource/image/girl1.png" alt="" />
                    <img src="./resource/image/boy2.png" alt="" />
                    <img src="./resource/image/girl2.png" alt="" />
                    <img src="./resource/image/boy1.png" alt="" />
                  </div>
                  <div className="text-end">
                    <Link className="text-decoration-none">Show All</Link>
                  </div>
            </div>
            {/* People you fellow */}
            <div className="border border-2 rounded-4 p-2 mt-2">
                  <div className="text-primary fw-semibold">People you Fellow</div>
                  <hr />
                  <div className="d-flex justify-content-evenly">
                    <img src="./resource/image/boy2.png" alt="" />
                    <img src="./resource/image/girl2.png" alt="" />
                    <img src="./resource/image/boy1.png" alt="" />
                    <img src="./resource/image/girl1.png" alt="" />
                    <img src="./resource/image/boy2.png" alt="" />
                    <img src="./resource/image/girl2.png" alt="" />
                    <img src="./resource/image/boy1.png" alt="" />
                  </div>
                  <div className="text-end">
                    <Link className="text-decoration-none">Show All</Link>
                  </div>
            </div>
          </div> 
          </div>
          <button id="showbtn" title="TASK" onClick={handleTaskFollowClick} type="button" className={active?"btn bi bi-dash rounded-circle bg-dark text-white position-fixed end-0 bottom-50":
          "btn bi bi-plus rounded-circle bg-dark text-white position-fixed end-0 bottom-50"} style={{height:"3em",width:"3em"}}></button>
    </>
  )
}