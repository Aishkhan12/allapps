import React,{useState} from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "components/CustomButtons/Button.js";
import Spinner from 'react-bootstrap/Spinner';

export default function AddEMP(props) {
  const [load, setLoad] = useState(false);
  return (
    <Formik
      initialValues={{ 
          Name: "",
          fathersName: "",
          mothersName: "",
          Address: "",
          DOB: "",
          number: "",
          enumber: "",
          education: "",
          DOJ: "",
          salary: ""
        }}
      validationSchema={Yup.object({
        Name: Yup.string()
          .required("*Enter Name"),
        fathersName: Yup.string()
          .required("*Father's Name"),
        mothersName: Yup.string()
          .required("*Mother's Name"),
        Address: Yup.string()
          .required("*Enter Address"),
        DOB: Yup.string()
          .required("*Enter Date of Birth"),
        number: Yup.string()
          .min(10, "*Must be 10 characters")
          .max(10, "*Must be 10 characters")
          .required("*Enter Number"),
        enumber: Yup.string()
          .min(10, "*Must be 10 characters")
          .max(10, "*Must be 10 characters")
          .required("*Enter Emergency Number"),
        education: Yup.string()
          .required("*Enter Education"),
        DOJ: Yup.string()
          .required("*Enter Date Of Joining"),
        salary: Yup.string()
          .required("*Enter Salary"),
      })}
      onSubmit={(values) => {
          setLoad(true)
          //alert(JSON.stringify(values));
      }}
    >
      <Form style={{width: '100%'}}>
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
            <Field style={styles.input} name="Name" placeholder="Enter name" type="text" />
            <div style={{fontSize: 12,color: 'red'}}>&nbsp;<ErrorMessage name="Name" /></div>
        </GridItem>    
        <GridItem xs={12} sm={12} md={6}>
            <Field style={styles.input} name="fathersName" placeholder="Enter Father's Name" type="text" />
            <div style={{fontSize: 12,color: 'red'}}>&nbsp;<ErrorMessage name="fathersName" /></div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
            <Field style={styles.input} name="mothersName" placeholder="Enter Mother's Name" type="text" />
            <div style={{fontSize: 12,color: 'red'}}>&nbsp;<ErrorMessage name="mothersName" /></div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
            <Field style={styles.input} name="Address" placeholder="Enter Address" type="text" />
            <div style={{fontSize: 12,color: 'red'}}>&nbsp;<ErrorMessage name="Address" /></div>
        </GridItem>
        <GridItem xs={6} sm={6} md={3}>
            <div style={styles.datepicker}>Date of Birth</div>
        </GridItem>
        <GridItem xs={6} sm={6} md={3}>
            <Field style={styles.input} name="DOB" placeholder="Date Of Birth" type="date" />
            <div style={{fontSize: 12,color: 'red'}}>&nbsp;<ErrorMessage name="DOB" /></div>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
            <Field style={styles.input} name="number" placeholder="Contact Number" type="text" />
            <div style={{fontSize: 12,color: 'red'}}>&nbsp;<ErrorMessage name="number" /></div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
            <Field style={styles.input} name="enumber" placeholder="Emergency Number" type="text" />
            <div style={{fontSize: 12,color: 'red'}}>&nbsp;<ErrorMessage name="enumber" /></div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
            <Field style={styles.input} name="education" placeholder="Education" type="text" />
            <div style={{fontSize: 12,color: 'red'}}>&nbsp;<ErrorMessage name="education" /></div>
        </GridItem>
        <GridItem xs={6} sm={6} md={3}>
            <div style={styles.datepicker}>Date of Joining</div>
        </GridItem>
        <GridItem xs={6} sm={6} md={3}>
            <Field style={styles.input} name="DOJ" placeholder="Date Of Joining" type="date" />
            <div style={{fontSize: 12,color: 'red'}}>&nbsp;<ErrorMessage name="DOJ" /></div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
            <Field style={styles.input} name="salary" placeholder="Salary" type="text" />
            <div style={{fontSize: 12,color: 'red'}}>&nbsp;<ErrorMessage name="salary" /></div>
        </GridItem>
        </GridContainer>
        {load ?
          <Button style={{float: 'right'}} color="success" type="submit">
            <Spinner
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            Submit
          </Button>
          :
          <Button style={{float: 'right'}} color="success" type="submit">Submit</Button>
        }
        <Button style={{float: 'right',marginRight: 10,}} onClick={props.close} color="danger" >Close</Button>
      </Form>
    </Formik>
  );
}
const styles = {
    input:{
        width: "100%",
        border: "none",
        borderBottom : "1px solid #8888",
        marginTop: 30,
        fontSize: 15,
        height: 40,
    },
    datepicker:{
      width: "100%",
      marginTop: 50,
      fontSize: 15,
      height: 40,
      fontWeight: 'bold',
    }
}

