import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

function AddNewItem(){
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            image: '',
            type: '',
            price: '',
            specialty: '',
            size: '',
            cheeseType: '',
            color: ''
        },
        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            type: Yup.string()
                .min(5, 'Type must be at least 5 characters')
                .required('Type is required'),
            price: Yup.number()
                .min(1, 'Price must be greater than 0')
                .required('Price is required'),
            size: Yup.string()
                .required('Size is required'),
            cheeseType: Yup.string()
                .required('Cheese type is required'),
            specialty: Yup.string().required('Specialty is required'),
            color: Yup.string().required('Color is required'),
        }),
        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            axios.post('http://localhost:5000/displayAllItems', values)
                .then(response => {
                    setStatus('success');
                    resetForm();
                    navigate('/displayAllItem');
                })
                .catch(error => {
                    setStatus('error');
                })
                .finally(() => {
                    setSubmitting(false);
                });
        },
    });

    return (
        <div className="container mt-4">
            <form onSubmit={formik.handleSubmit}>
                {/* Image URL */}
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input 
                        id="image"
                        name="image"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                    />
                    {formik.touched.image && formik.errors.image ? (
                        <div className="text-danger">{formik.errors.image}</div>
                    ) : null}
                </div>

                {/* Type */}
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type of Pizza</label>
                    <input 
                        id="type"
                        name="type"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.type}
                    />
                    {formik.touched.type && formik.errors.type ? (
                        <div className="text-danger">{formik.errors.type}</div>
                    ) : null}
                </div>

                {/* Price */}
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input 
                        id="price"
                        name="price"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div className="text-danger">{formik.errors.price}</div>
                    ) : null}
                </div>

                {/* Specialty */}
                <div className="mb-3">
                    <label htmlFor="specialty" className="form-label">Specialty</label>
                    <input 
                        id="specialty"
                        name="specialty"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.specialty}
                    />
                    {formik.touched.specialty && formik.errors.specialty ? (
                        <div className="text-danger">{formik.errors.specialty}</div>
                    ) : null}
                </div>

                {/* Size */}
                <div className="mb-3">
                    <label htmlFor="size" className="form-label">Size of Pizza</label>
                    <input 
                        id="size"
                        name="size"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.size}
                    />
                    {formik.touched.size && formik.errors.size ? (
                        <div className="text-danger">{formik.errors.size}</div>
                    ) : null}
                </div>

                {/* Cheese Type */}
                <div className="mb-3">
                    <label htmlFor="cheeseType" className="form-label">Cheese Type</label>
                    <input 
                        id="cheeseType"
                        name="cheeseType"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cheeseType}
                    />
                    {formik.touched.cheeseType && formik.errors.cheeseType ? (
                        <div className="text-danger">{formik.errors.cheeseType}</div>
                    ) : null}
                </div>

                {/* Color */}
                <div className="mb-3">
                    <label htmlFor="color" className="form-label">Color</label>
                    <input 
                        id="color"
                        name="color"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.color}
                    />
                    {formik.touched.color && formik.errors.color ? (
                        <div className="text-danger">{formik.errors.color}</div>
                    ) : null}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddNewItem;
