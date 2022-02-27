function Footer() {
    return (
        <footer className="bg-primary">
            <div className="container text-white">
                <div className="row">
                    <div className="col-3">
                        <p className="float-start"><a href="#">Back to top</a></p>
                    </div>
                    <div className="col-6">
                        <p>
                            {`@${new Date().getFullYear().toString()} Liz Neira`}
                        </p>
                    </div>
                    <div className="col-3">
                        <p className="float-end"><a href="/privacy-policy">Privacy Policy</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;