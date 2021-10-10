import React from 'react'
// import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const Signin = () => {
    return (
        <form className="container form-signin">
            <div className="mb-3">
            <Typography variant="h3" color="text.secondary" className="text-center">
                Signin
            </Typography>
            </div>
            <div className="mb-3">
                <TextField id="outlined-basic" label="Email" variant="filled" className="w-100" />
            </div>
            <div className="mb-3">
                <TextField id="outlined-basic" label="Password" variant="filled" className="w-100" />
            </div>
            <div className="mb-3">
                <Button
                    variant="contained"
                    className="w-100"
                >Signin</Button>
            </div>
        </form>
    )
}

// Signin.propTypes = {

// }

export default Signin
