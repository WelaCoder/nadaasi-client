import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useState } from 'react'
import { resendEmail } from '../../../actions/auth'

const Verify = ({ user, resendEmail }) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        resendEmail();
    }, [])
    if (user != null && user.isActive) {
        return <Redirect to='/' />
    }
    const handle = async () => {
        setLoading(true);
        await resendEmail();
        setLoading(false);
    }
    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
            <div class=" mb-3 col-md-5">
                <div class={"shadow-shop p-3"}>
                    <h4 class="text-uppercase font-Futura-bold mr-3 letter-spacing-cart mt-3 mb-3">
                        Verify Email
                </h4>
                    <div class="col-md-12 font-Futura-bold letter-spacing-cart mb-2 ">
                        A verification email has been sent to your email address at {user != null && user.email}
                    </div>
                    <div className="d-flex justify-content-center align-items center">
                        <div className="col-8">
                            <button type="submit" className="btn btn-block btn-dark my-2" onClick={() => handle()}>
                                <span
                                    className={
                                        loading ? "mr-2 spinner-border spinner-border-sm" : ""
                                    }
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                                {loading ? "Resending Email..." : "Resend Email"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    user: state.app.user,
});
export default connect(mapStateToProps, { resendEmail })(Verify);
