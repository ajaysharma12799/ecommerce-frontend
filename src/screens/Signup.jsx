import React from 'react'
// import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const Signup = () => {
    return (
        <form className="container form-signup">
            <div className="mb-3">
            <Typography variant="h3" color="text.secondary" className="text-center">
                Signup
            </Typography>
            </div>
            <div className="mb-3">
                <TextField id="outlined-basic" label="Username" variant="filled" className="w-100" />
            </div>
            <div className="mb-3">
                <TextField id="outlined-basic" label="Email" variant="filled" className="w-100" />
            </div>
            <div className="mb-3">
                <TextField id="outlined-basic" label="Password" variant="filled" className="w-100" />
            </div>
            <div className="mb-3">
                <TextField id="outlined-basic" label="Confirm Password" variant="filled" className="w-100" />
            </div>
            <div className="mb-3">
                <Button
                    variant="contained"
                    className="w-100"
                >Signup</Button>
            </div>
        </form>
    )
}

// Signup.propTypes = {

// }

export default Signup
