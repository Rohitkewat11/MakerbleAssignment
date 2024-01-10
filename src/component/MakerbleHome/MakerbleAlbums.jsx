export function MakerbleAlbums(){
    return(
        <>
            <div className="border border-2 rounded-4 p-2 mt-4">
                <div className="d-flex justify-content-between">
                    <span className="text-primary fw-semibold">Albums</span>
                    <button className="bi bi-plus btn btn-primary fw-semibold">New Project</button>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-2">
                    <div>
                        <img src="resource/image/makerble_logo1.jpg" alt="" height="50" width="50" />
                        <span className="text-primary">2021 Portfolio</span>
                    </div>
                    <div><i className="bi bi-gear-fill text-primary"></i></div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <div>
                        <img src="resource/image/makerble_logo1.jpg" alt="" height="50" width="50" />
                        <span className="text-primary">All Partners</span>
                    </div>
                    <div><i className="bi bi-gear-fill text-primary"></i></div>
                </div><div className="d-flex justify-content-between mt-2">
                    <div>
                        <img src="resource/image/makerble_logo1.jpg" alt="" height="50" width="50" />
                        <span className="text-primary">Big Lottery Fund</span>
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