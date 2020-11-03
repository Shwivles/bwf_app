import React from 'react';
import { Link } from 'react-router-dom';

//bootstrap
import Button from 'react-bootstrap/Button';

function Footer() {
    return (
        <footer>
            <div className="f-link">
                <div>
                    Check out the subreddit!
                </div>
                <Button target="_blank" as={Link} to={"//www.reddit.com/r/bodyweightfitness/wiki/index"}>
                    Click Here!
                </Button>
            </div>

            <div className="copyright">
            © 2020 Copyright
            </div>

        </footer>
    );
}

export default Footer;