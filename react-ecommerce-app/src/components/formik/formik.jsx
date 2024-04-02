import { useFormik } from "formik"
import * as yup from "yup"
import * as bootstrap from "bootstrap";

export function Formik(){
    const formik = useFormik({
        initialValues:{
            UserName:"",
            Age:0,
            City:'',
            Gender:''
        },
        validateSchema:yup.object({UserName:yup.string().required('Name Required').min(4,),Age: yup.number().required('Age Required').min(15, 'Age min 15 requried').max(30,'Age max 30 only')
    }),
    onSubmit: (userDetails) => {
        console.log(userDetails);
     }
    })
    return(
        <div className="container-fluid">
            <form action="" className="w-50" onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="UserName" className="form-control" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange} className="form-control" id="" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} className="form-Select" id="">
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                        <dt>Gender</dt>
                        <dd><input type="radio" onChange={formik.handleChange} className="form-check-input"  name="Gender" value="Male"/><label>Male</label>
                        <input type="radio" onChange={formik.handleChange} className="form-check-input" name="Gender" value="Female" /><label>/Female</label></dd>
                    </dd>
                    </dl>
                    <button type="submit" className="btn btn primary w-100">Submit</button>
               
            </form>
        </div>
    )
}