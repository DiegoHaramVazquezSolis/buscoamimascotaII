import PropTypes from 'prop-types';

const CheckBoxField = ({ name, label, checked, onChange, className, required }) => {
    return (
        <>
        <label className={`container ${className}`}>
            {label}
            <input
                type='checkbox'
                name={name}
                checked={checked}
                onChange={onChange}
                required={required} />
                <span className='checkmark'></span>
        </label>
         <style jsx>{`
            .container {
                font-family: 'Open Sans' sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                letter-spacing: 0.15px;
                display: block;
                position: relative;
                padding-left: 35px;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                background-color: transparent;
                border: 2.5px solid #26C7DC;
                border-radius: .25rem;
            }

            .container:hover input ~ .checkmark {
                background: rgba(38, 199, 220, .35);
            }
            
            .container:focus input ~ .checkmark {
                background: rgba(38, 199, 220, .50);
            }

            .container input:checked ~ .checkmark {
                background: #26C7DC;
            }

            .container:hover input:checked ~ .checkmark {
                background: rgba(38, 199, 220, .60);
            }

            .container:focus input:checked ~ .checkmark {
                background: rgba(38, 199, 220, .75);
            }
              
            .checkmark:after {
                content: "";
                position: absolute;
                display: none;
            }
              
            .container input:checked ~ .checkmark:after {
                display: block;
            }
              
            .container .checkmark:after {
                left: 9px;
                top: 5px;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }

            input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
            }
         `}</style>   
        </>
    );
}

CheckBoxField.propTypes = {
    required: true
}

CheckBoxField.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool
}

export default CheckBoxField;
