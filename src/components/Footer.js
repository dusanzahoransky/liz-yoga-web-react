function Footer() {
    return (
        <footer className="bg-primary">
            <div className="container text-white">
                <div className="row">
                    <div className="col-4-sm">
                        <p className="float-start"><a href="#">Back to top</a></p>
                    </div>
                    <div className="col-4-sm">
                        <p>
                            {`@${new Date().getFullYear().toString()} Liz Neira`}
                        </p>
                    </div>
                    <div className="col-4-sm">
                        <p className="float-end"><a href="/privacy-policy">Privacy Policy</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;