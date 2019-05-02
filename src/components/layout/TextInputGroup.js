// import React from "../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
// import PropTypes from "../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types";
// import classnames from "../../../../Library/Caches/typescript/2.9/node_modules/@types/classnames";
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";


const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          className={classnames("form-control form-control-lg", {
            "is-invalid": error
          })}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
