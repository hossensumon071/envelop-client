const FromControl = ({
  label,
  labelInner,
  inputType,
  placeholder,
  fromFields,
  setFromFields
}) => {
  return (
    <div className="form-control flex flex-col gap-2">
      <label htmlFor={label} className="cursor-pointer">
        {labelInner}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        id={label}
        value={fromFields[label]}
        onChange={(e) => {
          setFromFields({ ...fromFields, [label]: e.target.value });
        }}
        className="border py-3 px-5 w-[25rem] rounded outline-none focus:border-violet-500"
      />
    </div>
  );
};

export default FromControl;
