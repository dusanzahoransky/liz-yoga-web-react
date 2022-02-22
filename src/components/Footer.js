function Footer() {
    return (
        <footer className="container">
            <div className="row">
                <div className="col-6">
                    <p className="float-start"><a href="#">Back to top</a></p>
                </div>
                <div className="col-6">
                    <p className="float-end">
                        {`@${new Date().getFullYear().toString()} Liz Neira`}
                    </p>
                </div>
            </div>
            {/*<div className="row">*/}
            {/*    <div className="col-3">*/}
            {/*        <p className="float-start"><a href="#">Back to top</a></p>*/}
            {/*    </div>*/}
            {/*    <div className="col-6">*/}
            {/*        <p>&copy; 2021 Yoga with Liz</p>*/}
            {/*    </div>*/}
            {/*    <div className="col-3">*/}
            {/*        <p className="float-end">ABN 00 000 000 000</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </footer>
    );
}

export default Footer;