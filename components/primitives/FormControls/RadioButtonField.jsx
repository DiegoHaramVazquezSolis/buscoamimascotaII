import PropTypes from 'prop-types';
import Subtitle1 from '../../styled/Subtitle1';

const RadioButtonField = ({ name, label, checked, onChange, className, required }) => {
    return (
        <>
        <label className={`container ${className}`}>
            <Subtitle1>{label}</Subtitle1>
            <input
                type='radio'
                name={name}
                checked={checked}
                onChange={onChange}
                required={required} />
                <span className='radiomark'></span>
        </label>
         <style jsx>{`
            .container {
                display: block;
                position: relative;
                padding-left: 35px;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            .radiomark {
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                background-color: transparent;
                border: 2.5px solid #26C7DC;
                border-radius: 50%;
            }

            .container:hover input ~ .radiomark {
                background: rgba(38, 199, 220, .35);
            }
            
            .container:focus input ~ .radiomark {
                background: rgba(38, 199, 220, .50);
            }

            .container input:checked ~ .radiomark {
                background: #26C7DC;
            }

            .container:hover input:checked ~ .radiomark {
                background: rgba(38, 199, 220, .60);
            }

            .container:focus input:checked ~ .radiomark {
                background: rgba(38, 199, 220, .75);
            }
              
            .radiomark:after {
                content: "";
                position: absolute;
                display: none;
            }
              
            .container input:checked ~ .radiomark:after {
                display: block;
            }
              
            .container .radiomark:after {
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

RadioButtonField.propTypes = {
    required: true
}

RadioButtonField.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool
}

export default RadioButtonField;
