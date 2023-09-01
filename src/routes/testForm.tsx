
import TextField from '../components/fields/TextField'

function TestForm() {

  
  return (
    <div className="page__test-form">
      <div className="p-5">
        <div className="rounded-xl shadow-lg m-4 p-6 max-w-sm mx-auto bg-gray-800">
          Test Form Page

          <hr />

          <div className="mt-8 max-w-md">

            <div className="grid grid-cols-1 gap-6">
            
              <TextField
                label="Test Text Field"
                value=""
              />
            
              
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TestForm;
