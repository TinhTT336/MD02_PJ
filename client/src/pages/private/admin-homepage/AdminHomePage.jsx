import React from 'react'

export default function AdminHomePage() {
    return (
        <>
            <div className='p-5 mt-4'>
                <div className="row mb-5">
                    <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="d-flex align-items-center align-self-start">
                                            <h3 className="mb-0">$12.34</h3>
                                            <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="icon icon-box-success ">
                                            <i className="fa-solid fa-arrow-up" />
                                        </div>
                                    </div>
                                </div>
                                <h6 className="text-muted font-weight-normal">Potential growth</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="d-flex align-items-center align-self-start">
                                            <h3 className="mb-0">$17.34</h3>
                                            <p className="text-success ml-2 mb-0 font-weight-medium">+11%</p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="icon icon-box-success">
                                            <i className="fa-solid fa-arrow-up" />
                                        </div>
                                    </div>
                                </div>
                                <h6 className="text-muted font-weight-normal">Revenue current</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="d-flex align-items-center align-self-start">
                                            <h3 className="mb-0">$12.34</h3>
                                            <p className="text-danger ml-2 mb-0 font-weight-medium">-2.4%</p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="icon icon-box-danger">
                                            <i className="fa-solid fa-arrow-down"></i>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="text-muted font-weight-normal">Daily Income</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="d-flex align-items-center align-self-start">
                                            <h3 className="mb-0">$31.53</h3>
                                            <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="icon icon-box-success ">
                                            <i className="fa-solid fa-arrow-up" />
                                        </div>
                                    </div>
                                </div>
                                <h6 className="text-muted font-weight-normal">Expense current</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Transaction History</h4>
                                <canvas id="transaction-history" className="transaction-chart" />
                                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                    <div className="text-md-center text-xl-left">
                                        <h6 className="mb-1">Transfer to Paypal</h6>
                                        <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                                    </div>
                                    <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                                        <h6 className="font-weight-bold mb-0">$236</h6>
                                    </div>
                                </div>
                                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                    <div className="text-md-center text-xl-left">
                                        <h6 className="mb-1">Tranfer to Stripe</h6>
                                        <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                                    </div>
                                    <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                                        <h6 className="font-weight-bold mb-0">$593</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-row justify-content-between">
                                    <h4 className="card-title mb-1">Open Projects</h4>
                                    <p className="text-muted mb-1">Your data status</p>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="preview-list">
                                            <div className="preview-item border-bottom">
                                                <div className="preview-thumbnail">
                                                    <div className="preview-icon bg-primary">
                                                        <i className="mdi mdi-file-document" />
                                                    </div>
                                                </div>
                                                <div className="preview-item-content d-sm-flex flex-grow">
                                                    <div className="flex-grow">
                                                        <h6 className="preview-subject">Admin dashboard design</h6>
                                                        <p className="text-muted mb-0">Broadcast web app mockup</p>
                                                    </div>
                                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                                        <p className="text-muted">15 minutes ago</p>
                                                        <p className="text-muted mb-0">30 tasks, 5 issues </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="preview-item border-bottom">
                                                <div className="preview-thumbnail">
                                                    <div className="preview-icon bg-success">
                                                        <i className="mdi mdi-cloud-download" />
                                                    </div>
                                                </div>
                                                <div className="preview-item-content d-sm-flex flex-grow">
                                                    <div className="flex-grow">
                                                        <h6 className="preview-subject">Wordpress Development</h6>
                                                        <p className="text-muted mb-0">Upload new design</p>
                                                    </div>
                                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                                        <p className="text-muted">1 hour ago</p>
                                                        <p className="text-muted mb-0">23 tasks, 5 issues </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="preview-item border-bottom">
                                                <div className="preview-thumbnail">
                                                    <div className="preview-icon bg-info">
                                                        <i className="mdi mdi-clock" />
                                                    </div>
                                                </div>
                                                <div className="preview-item-content d-sm-flex flex-grow">
                                                    <div className="flex-grow">
                                                        <h6 className="preview-subject">Project meeting</h6>
                                                        <p className="text-muted mb-0">New project discussion</p>
                                                    </div>
                                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                                        <p className="text-muted">35 minutes ago</p>
                                                        <p className="text-muted mb-0">15 tasks, 2 issues</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="preview-item border-bottom">
                                                <div className="preview-thumbnail">
                                                    <div className="preview-icon bg-danger">
                                                        <i className="mdi mdi-email-open" />
                                                    </div>
                                                </div>
                                                <div className="preview-item-content d-sm-flex flex-grow">
                                                    <div className="flex-grow">
                                                        <h6 className="preview-subject">Broadcast Mail</h6>
                                                        <p className="text-muted mb-0">
                                                            Sent release details to team
                                                        </p>
                                                    </div>
                                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                                        <p className="text-muted">55 minutes ago</p>
                                                        <p className="text-muted mb-0">35 tasks, 7 issues </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="preview-item">
                                                <div className="preview-thumbnail">
                                                    <div className="preview-icon bg-warning">
                                                        <i className="mdi mdi-chart-pie" />
                                                    </div>
                                                </div>
                                                <div className="preview-item-content d-sm-flex flex-grow">
                                                    <div className="flex-grow">
                                                        <h6 className="preview-subject">UI Design</h6>
                                                        <p className="text-muted mb-0">New application planning</p>
                                                    </div>
                                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                                        <p className="text-muted">50 minutes ago</p>
                                                        <p className="text-muted mb-0">27 tasks, 4 issues </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
