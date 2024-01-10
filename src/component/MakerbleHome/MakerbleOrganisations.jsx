export function MakerbleOrganisation(){
    return(
        <>
            <div className="border border-2 rounded-4 p-2 mt-4">
                <div className="">
                    <span className="text-primary fw-semibold">Organisations</span>
                    {/* <button className="bi bi-plus btn btn-primary fw-semibold">New Project</button> */}
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-2">
                    <div className="d-flex">
                        <img src="resource/image/makerble_logo1.jpg" alt="" height="50" width="50" />
                        <span className="d-grid">
                        <span className="text-primary">An Organisation Demo</span>
                        <span>Admin</span>
                        </span>
                    </div>
                    <div><i className="bi bi-gear-fill text-primary"></i></div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <div className="d-flex" >
                        <img src="resource/image/makerble_logo1.jpg" alt="" height="50" width="50" />
                        <span className="d-grid">
                        <span className="text-primary">A Showcase international Development Education Charity</span>
                        <span>Member</span>
                        </span>
                    </div>
                    {/* <div><i className="bi bi-gear-fill text-primary"></i></div> */}
                </div><div className="d-flex justify-content-between mt-2">
                    <div className="d-flex">
                        <img src="resource/image/makerble_logo1.jpg" alt="" height="50" width="50" />
                        <span className="d-grid">
                        <span className="text-primary">Oak Tree Secondary School</span>
                        <span>Admin</span>
                        </span>
                    </div>
                    <div><i className="bi bi-gear-fill text-primary"></i></div>
                </div>
                <div className="text-end">
                    <span className="text-primary fw-semibold">Show All</span>
                </div>
            </div>
        </>
    )
}