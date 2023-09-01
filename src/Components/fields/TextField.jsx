
// todo: state management, hooks, etc. The fun stuff. 

const TextField = ({ value, label }) => {
  return (
    <label className="block">
      <span className="text-gray-200">{label}</span>
      <input type="text" className="form-input mt-1 block w-full" value={value ?? ""} />
    </label>
    
  )
}

export default TextField;
