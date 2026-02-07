import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    title: Yup.string().required('The title is a required field'),
    author: Yup.string().required('The author is a required field'),
    isbn: Yup.string().required('The isbn is a required field')
});

export default validationSchema;