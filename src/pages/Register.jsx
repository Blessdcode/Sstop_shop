import styled from "styled-components";
import { mobile } from "../reponsive";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    );
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: palevioletred;
  color: white;
  cursor: pointer;
  margin-right: 14px;
`;
const B = styled.b`
    cursor: pointer;
`

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;



const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(20, 'name must be less or 20 characters.').required(),
      lastName: Yup.string().max(20, 'name must be less or 20 characters.').required(),
      username: Yup.string().max(15, 'name must be less or 15 characters.').required(),
      email: Yup.string().email('Invalid email address').required(),
      password: Yup.string().min(8, 'must not less than 8').max(20, 'must not be more than 20').required(),
      comfirm: Yup.string().oneOf([Yup.ref('password'), null]).required(),


    })

    // onSubmit:(values)=>{

    // }

  })
  console.log(formik.errors);
  const navigate = useNavigate()
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={formik.handleSubmit}>
            <Input type="text" id="name" name="name" placeholder="name" value={formik.values.name} onChange={formik.handleChange} />
            <Input type="text" id="lastName" name="lastName" placeholder="last name" value={formik.values.lastName} onChange={formik.handleChange} />
            <Input type="text" id="username" name="username" placeholder="username" value={formik.values.username} onChange={formik.handleChange} />
            <Input type="email" id="email" name="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} />
            <Input type="password" id="password" name="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} />
            <Input type="password" name="comfirm" id="comfirm" placeholder="confirm password" value={formik.values.comfirm} onChange={formik.handleChange} />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b> <br />

              Already have an account? <B onClick={() => navigate('/login')}>Login</B>
            </Agreement>

            <Button type="submit">CREATE</Button> {''}
            <Button onClick={() => navigate('/')}>Go to home page</Button>

            {Object.keys(formik.errors).map((fieldName) => (
              formik.touched[fieldName] && formik.errors[fieldName] && (
                <ErrorMessage key={fieldName}>{formik.errors[fieldName]}</ErrorMessage>
              )
            ))}
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register;
